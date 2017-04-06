import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService{
        constructor (private http:Http){

        }
        getAllPersons(){
            return this.http.get(`https://emergemd.jira.com/rest/api/2/issue/PHX-4240`).map((response:Response) =>
                response.json());
       }
}