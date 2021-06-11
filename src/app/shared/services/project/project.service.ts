import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Project } from '../../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getProjects(): Observable<Project[]>{
    const url = `${environment.url}projects/`;
    return this.http.get<Project[]>(url, this.httpOptions);
  }

  deleteProject(projectName: String): Observable<any>{
    const url = `${environment.url}projects/${projectName}`;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
