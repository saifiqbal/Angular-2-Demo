import { Component, OnInit } from '@angular/core';
import{Http,Headers,HttpModule, RequestOptions,RequestMethod}from '@angular/http'
import { FormBuilder,Validators,NgForm,FormGroup,FormControl,FormArray} from '@angular/forms';
import 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'bugs',
    templateUrl: 'bugs.component.html'
})

export class BugsComponent {
    bugs: FormGroup;
    jiraUsers:any[];
    subTaskList:any[];
    keyIndex:number;

  //  arr:any;
    selecteUser:any;
    constructor(private _http:Http) {
        this.subTaskList=[{ SubTaskName:'Analysis'},                  /*create from xml*/
                        { SubTaskName:'Development'},
                        { SubTaskName:'DesignTestCases'},
                        { SubTaskName:'CodeAudit'},
                        { SubTaskName:'CodeDeployment'},
                        { SubTaskName:'QaTesting'},
                        { SubTaskName:'CodeMerge'},
                        { SubTaskName:'DeploymentToDev'},
                        { SubTaskName:'QaIntegration'}];
        

        this.jiraUsers=[{ value:'anum.10p', name:'Anum Iftikhar'},     /*create from xml*/
        { value:'saad', name:'Saad Khan (10P)'},
        { value:'asad.zubair', name:'Asad Zubair (10Pearls)'},
        { value:'nizar', name:'Nizar Ilyas (10Pearls)'},
        { value:'mubashir', name:'Mubashir Hussain (10Pearls)'},
        { value:'Ahmed.10p', name:'Ahmed Raza (10Pearls)'},
        { value:'sadaf.10p', name:'Sadaf Saeed'},
        { value:'sharjeel.ahmed', name:'Sharjeel Ahmed'},
        { value:'mudassir.10p', name:'Mudassir Khan'},
        { value:'saifullah.iqbal', name:'Saifullah Iqbal'},
        { value:'Ziauddin', name:'Ziauddin'},
        { value:'Usman.10p', name:'usman.10p'},
        { value:'Kashif', name:'kashif'}];
    }
    ngOnInit() {
      this.bugs = new FormGroup({                                                      /*create from xml*/
         Analysis: new FormControl(null,Validators.required),
         Development: new FormControl(null,Validators.required),
         DesignTestCases: new FormControl(null,Validators.required),
         CodeAudit: new FormControl(null,Validators.required),
         CodeDeployment: new FormControl(null,Validators.required),
         QaTesting : new FormControl(null,Validators.required),
         CodeMerge : new FormControl(null,Validators.required),
         DeploymentToDev : new FormControl(null,Validators.required),
         QaIntegration : new FormControl('',Validators.required),
         UserName:new FormControl('saifullah.iqbal',Validators.required),
         Password:new FormControl('siqbal901',Validators.required),
         Ticket:new FormControl('',Validators.required)

      });
   
    }

    onSubmit(){
    debugger;
    let httpHelper=this._http;
        let assigneeArray = new FormArray([
        this.bugs.controls.Analysis,this.bugs.controls.Development,this.bugs.controls.DesignTestCases,this.bugs.controls.CodeAudit,
        this.bugs.controls.CodeDeployment,this.bugs.controls.QaTesting,this.bugs.controls.CodeMerge
        ,this.bugs.controls.DeploymentToDev,this.bugs.controls.QaIntegration
        ]);
        let ticketNum:string=this.bugs.controls.Ticket.value;
        let subtaskArr=this.subTaskList;
        let username=this.bugs.controls.UserName.value;
        let password=this.bugs.controls.Password.value;
        var headers = new Headers();        
        headers.append('Content-Type', 'application/json');
        let callsarr:any[]=[];
        // headers.append("Accept", 'application/json');
        this.keyIndex=ticketNum.indexOf('-');
        if(this.keyIndex>0)
        {
            var key:string=ticketNum.substring(0,this.keyIndex).toString();
        } 
        else
        {
            var key="";
        }

        assigneeArray.controls.forEach(function(el,index,assigneeArray){

        let data={
                "Jira":{
                            "fields": {
                                "project": {
                                    "key": key
                                },
                                "parent": {
                                    "key": `${ticketNum}`
                                },
                                "summary": `${subtaskArr[index].SubTaskName}`,
                                "assignee": {
                                    "name": `${el.value}`
                                },
                                "description": "",
                                "issuetype": {
                                    "name": "Sub-task"
                                }
                            }
                    },
                    "credentials":{

                            "username":username,
                            "password":password
                    }

            };

        let body = JSON.stringify(data);
        let options = new RequestOptions({ headers: headers });

           let calls= httpHelper.post('http://localhost:5000/api/CreateSubTask', body,options).map((res) => res.json());

           callsarr.push(calls);

        });

        Observable.forkJoin(callsarr).subscribe(results => {
         console.log(results);
        });
    }
}