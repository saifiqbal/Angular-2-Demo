import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { routing } from './app.routing';
import {UserComponent} from './Users/users.component';
import {UserService} from './Services/users.service';
import { RegistrationComponent } from './Registration/registration.component';
import{DashBoardComponent}from './DashBoard/dashboard.component';
import { RouterModule } from '@angular/router';


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
    DashBoardComponent
],
providers:[
   UserService
],
bootstrap:[AppComponent]
})
export class AppModule{}
