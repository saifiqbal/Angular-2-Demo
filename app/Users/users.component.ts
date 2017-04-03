import { Component,OnInit } from '@angular/core';
import {UserService}from '../Services/users.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../Model/UserModel';
@Component({
    moduleId:module.id,
    templateUrl:'users.component.html',
    styleUrls:['userStyle.css']
})
export class UserComponent implements OnInit{
    currentUser: User;
    users:User[]=[];
    constructor(private _userservice: UserService){}

    ngOnInit(){
        this.loadAllUsers();
    }
    private loadAllUsers(){
       //this._userservice.getAllPersons().subscribe(users => { this.users = users;});
        this.users = [
            { "UserName": "Saif10P", "FirstName": "Saif","LastName":"Iqbal" },
            { "UserName": "10Pearls", "FirstName": "Saifullah" ,"LastName":"Iqbal"},
            { "UserName": "Avizia1", "FirstName": "Started","LastName":"Test" },
             { "UserName": "Zia10", "FirstName": "Available","LastName":"Test" },
            { "UserName": "Ibad10", "FirstName": "Ready" ,"LastName":"Test"},
            { "UserName": "Yasir10", "FirstName": "Started","LastName":"Test" },
             { "UserName": "Ahmar101", "FirstName": "Available","LastName":"Test" },
            { "UserName": "Mudassir10P", "FirstName": "Ready" ,"LastName":"Test"},
            { "UserName": "Test", "FirstName": "Started","LastName":"Test" },
             { "UserName": "Test10p", "FirstName": "Available","LastName":"Test" },
            { "UserName": "Test101p", "FirstName": "Ready" ,"LastName":"Test"},
            { "UserName": "Test1001P", "FirstName": "Started","LastName":"Test" }
        ];
     


    }
}