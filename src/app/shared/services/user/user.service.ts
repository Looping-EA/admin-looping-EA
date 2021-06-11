import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient){ }

  logIn(user: User) {
    const url = `${environment.url}users/login`;
    return this.http.post<any>(url, user, this.httpOptions);
  }

  getUsers(): Observable<User[]>{
    const url = `${environment.url}users/`;
    return this.http.get<User[]>(url, this.httpOptions);
  }

  getUser(username: String): Observable<User>{
    const url = `${environment.url}users/${username}`;
    return this.http.get<User>(url, this.httpOptions);
  }

  deleteUser(username: String): Observable<User>{
    const url = `${environment.url}users/delete`;
    const user = {uname: username};
    return this.http.post<User>(url, user, this.httpOptions);
  }

  makeAdmin(username: String, admin: String): Observable<User>{
    const url = `${environment.url}users/makeAdmin/${username}`;
    const adminJson = {uname: admin};
    return this.http.post<User>(url, adminJson, this.httpOptions);
  }
}
