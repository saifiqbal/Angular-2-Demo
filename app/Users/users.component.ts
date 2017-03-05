import { Component,OnInit } from '@angular/core';
import {UserService}from '../Services/users.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../Model/UserModel';
@Component({
    moduleId:module.id,
    templateUrl:'users.component.html',
})
export class UserComponent implements OnInit{
    currentUser: User;
    users:User[]=[];
    constructor(private _userservice: UserService){}

    ngOnInit(){
        this.loadAllUsers();
    }
    private loadAllUsers(){
       this._userservice.getAllPersons().subscribe(users => { this.users = users;});
    }
}