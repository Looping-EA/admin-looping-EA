import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] | undefined;
  userLoggedIn: Boolean | undefined = (localStorage.getItem('isLogged') == "true");
  admin: String | null = localStorage.getItem('admin');

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userLoggedIn);
    if(this.userLoggedIn == true){
      this.userService.getUsers().subscribe(
        (data) => {
          console.log(data);
          this.users = data;
        },
        (err) => {
          console.log(err);
          this.router.navigateByUrl('/');
        }
      );
    } else {
      this.router.navigateByUrl('/');
    }
  }

  deleteUser(user: String): void{
    this.userService.deleteUser(user).subscribe(
      (data) => {
        window.location.reload();
      },
      (err) => {
        console.log('pretty error');
      }
    );
  }

  makeAdmin(user: String): void{
    this.userService.makeAdmin(user, this.admin!).subscribe(
      (value) => {
        window.location.reload();
      },
      (err) => {
        console.log('pretty error');
      }
    );
  }
}
