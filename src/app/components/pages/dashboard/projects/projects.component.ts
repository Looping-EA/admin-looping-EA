import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/shared/interfaces/project';
import { ProjectService } from 'src/app/shared/services/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] | undefined;
  userLoggedIn: Boolean | undefined = (localStorage.getItem('isLogged') == 'true');

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit(): void {
    if(this.userLoggedIn == true){
      this.projectService.getProjects().subscribe(
        (res) => {
          this.projects = res;
        }, 
        (err) => {
          this.router.navigateByUrl('/');
        }
      );
    } else {
      this.router.navigateByUrl('/');
    }
  }

  deleteProject(projectName: String): void {
    this.projectService.deleteProject(projectName).subscribe(
      (res) => {
        window.location.reload();
      },
      (err) => {
        console.log('pretty error');
        this.router.navigateByUrl('/');
      }
    );
  }

}
