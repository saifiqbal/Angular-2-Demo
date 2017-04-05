import {Component,OnInit} from '@angular/core'
import {AuthService}from '../Services/auth.service'
import {Router}from '@angular/router'
import {GlobalEventsManager} from '../Events/global.events'


@Component({
  templateUrl:'login.component.html',
  moduleId:module.id
})

export class LoginComponent implements OnInit {
    userInfo:Object={}
    ngOnInit() {
     
    }    
    constructor(private authService:AuthService,private _router:Router,private eventManager:GlobalEventsManager) {   
    }

    login(){    /*on successful login show header using globalEventsManager*/

        console.log('login');
      /*pass userInfo to authentication service*/
       this.eventManager.showNavBar(true);
       this._router.navigate(['dashboard']);

        // console.log(this.userInfo);
        // this.authService.loginfn(this.userInfo).then((res)=>{
        //     if(res){
        //         this.eventManager.showNavBar(true);
        //         this._router.navigate(['DashBoard']);
        //     }
        //     else
        //         console.log(res);
        // })
     }
}