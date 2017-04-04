import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import { routing } from './app.routing';
import {UserComponent} from './Users/users.component';
import { RegistrationComponent } from './Registration/registration.component';
import{DashBoardComponent}from './DashBoard/dashboard.component';
import{LoginComponent}from './Login/login.component';
import { RouterModule } from '@angular/router';
/*Services*/
import {UserService} from './Services/users.service';
import {AuthService}from './Services/auth.service';


@NgModule({
imports:[
   BrowserModule,
   FormsModule,
   HttpModule,
   ReactiveFormsModule,
   RouterModule,
   routing
],
declarations:[
    AppComponent,
    UserComponent,
    RegistrationComponent,
    DashBoardComponent,
    LoginComponent
],
providers:[
   UserService,
   AuthService
],
bootstrap:[AppComponent]
})
export class AppModule{}
