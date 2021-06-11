import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formLogin!: FormGroup;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('isLogged', 'false');
    this.formLogin = this.formBuilder.group({
      uname: ['', [Validators.required]],
      pswd: ['', [Validators.required]]
    });
  }

  onSubmit(){
    //FORM
    console.log(this.formLogin.value);
    
    console.log('isValid =', this.formLogin.valid);
    if(this.formLogin.valid){
      // USER GENERATED AS JSON
      const user = {
        uname: this.formLogin.value.uname,
        pswd: this.formLogin.value.pswd,
        isAdmin: false,
        email: ""
      } as unknown as User;

      // SEND
      this.userService.logIn(user).subscribe(
        (value) => {
          localStorage.setItem('id_token', value.accessToken);
          this.userService.getUser(user.uname).subscribe(
            (value) => {
              console.log(value);
              if(value.isAdmin){
                console.log('admin');
                localStorage.setItem('isLogged', 'true');
                localStorage.setItem('admin', value.uname.toString());
                this.router.navigateByUrl(`/dashboard/${value.uname}`).then(()=>window.location.reload());
              } else {
                console.log('not an admin');
                this.router.navigateByUrl('/unauthorized');
              }
            },
            (err) => {
              console.log('not found.');
              this.router.navigateByUrl('/notfound');
            }
          );
        },
        (err) => {
          console.log(err);
          this.router.navigateByUrl('/notfound');
        }
      );
    }
  }

}
