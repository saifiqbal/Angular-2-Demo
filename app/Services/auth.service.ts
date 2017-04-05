import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService{
    isLoggedIn:boolean;
    constructor(private _http:Http){
    }
    loginfn(userCredentials:any){
        var header=new Headers();
        var creds="username="+userCredentials.username+"&"+"password:"+userCredentials.password;
        header.append('Content-Type','application/X-www-form=urlencoded');

        return new Promise((resolve)=>{
            this._http.post('http://localhost:5000/api/authenticate',creds,{headers:header}).subscribe((data)=>{
            
            if(data.json().success){
                window.localStorage.setItem('auth-key',data.json().key);
                this.isLoggedIn=true;
            }
            resolve(this.isLoggedIn);
            })
       });
   }
}