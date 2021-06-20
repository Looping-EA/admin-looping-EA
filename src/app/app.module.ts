import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/pages/home/home.component';

import { authInterceptorProviders } from './app.auth.interceptor';
import { UsersComponent } from './components/pages/dashboard/users/users.component';
import { ProjectsComponent } from './components/pages/dashboard/projects/projects.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard/dashboard.component';
import { UnauthorizedComponent } from './components/pages/unauthorized/unauthorized.component';
import { NotfoundComponent } from './component/pages/notfound/notfound.component';
import { ContactComponent } from './components/pages/dashboard/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    ProjectsComponent,
    DashboardComponent,
    UnauthorizedComponent,
    NotfoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
