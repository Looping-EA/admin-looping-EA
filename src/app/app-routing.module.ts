import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './component/pages/notfound/notfound.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard/dashboard.component';
import { ProjectsComponent } from './components/pages/dashboard/projects/projects.component';
import { UsersComponent } from './components/pages/dashboard/users/users.component';
import { HomeComponent } from './components/pages/home/home.component';
import { UnauthorizedComponent } from './components/pages/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'dashboard/users', component: UsersComponent
  },
  {
    path: 'dashboard/projects', component: ProjectsComponent
  },
  {
    path: 'dashboard/:uname', component: DashboardComponent
  },
  {
    path: 'unauthorized', component: UnauthorizedComponent
  },
  {
    path: 'notfound', component: NotfoundComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
