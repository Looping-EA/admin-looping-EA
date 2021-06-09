import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formLogin!: FormGroup;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      uname: new FormControl(),
      pswd: new FormControl()
    });
  }

  onSubmit(form: FormGroup){
    console.log('isValid=', form.valid);
    if(form.valid){
      // USER GENERATED AS JSON
      const user = {
        uname: form.value.uname,
        pswd: form.value.pswd,
        isAdmin: true,
        email: ""
      } as unknown as User;

      // SEND
      this.userService.logIn(user).subscribe(
        (value) => {
          if(value.isAdmin){
            // CONSOLE
            console.log(`user registered as admin....`);
            console.log('redirecting to dashboard....');

            // REDIRECT

          } else {

          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
