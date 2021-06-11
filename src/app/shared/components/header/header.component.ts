import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: Boolean | undefined = (localStorage.getItem('isLogged') == "true");

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.userLoggedIn);
  }

  click(): void {
    console.log(this.userLoggedIn);
    localStorage.removeItem('admin');
    localStorage.setItem('isLogged', 'false');
    this.router.navigateByUrl('/home').then(() => {window.location.reload();});
  }

}
