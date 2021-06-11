import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLoggedIn: Boolean | undefined = (localStorage.getItem('isLogged') == "true");
  username: String | null | undefined;

  constructor(private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(params=>{this.username=params.get('uname')});
    if(this.userLoggedIn){
    } else {
      this.router.navigateByUrl('/home');
    }
  }

  click(param: String): void{
    this.router.navigateByUrl(`/dashboard/${param}`);
  }
}
