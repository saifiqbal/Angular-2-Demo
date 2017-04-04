import {Component,OnInit} from '@angular/core'
import {AuthService}from '../Services/auth.service'
import {Router}from '@angular/router'


@Component({
  templateUrl:'login.component.html',
  moduleId:module.id
})

export class LoginComponent implements OnInit {
    userInfo:Object={}
    ngOnInit() {
     
    }    
    constructor(private authService:AuthService,private _router:Router) {   
    }

    login(){
    console.log(this.userInfo);
        this.authService.loginfn(this.userInfo).then((res)=>{
            if(res)
            this._router.navigate(['DashBoard']);
            else
            console.log(res);
        })
     }
}