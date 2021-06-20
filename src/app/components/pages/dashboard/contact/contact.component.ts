import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/shared/interfaces/contact';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] | undefined;
  userLoggedIn: Boolean | undefined = (localStorage.getItem('isLogged') == 'true');

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    if(this.userLoggedIn == true){
      this.contactService.getContacts().subscribe(
        (res) => {
          this.contacts = res;
        }, 
        (err) => {
          this.router.navigateByUrl('/');
        }
      );
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
