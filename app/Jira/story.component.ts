import { Component, OnInit } from '@angular/core';
import{Http,Headers,HttpModule, RequestOptions,RequestMethod}from '@angular/http'
import { FormBuilder,Validators,NgForm,FormGroup,FormControl,FormArray} from '@angular/forms';
import 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'story',
    templateUrl: 'story.component.html'    /*create dynamic template based on xml file*/
})

export class StoryComponent implements OnInit {
    story: FormGroup;
    jiraUsers:any[];
    subTaskList:any[];
    constructor(private _http:Http) {
       this.jiraUsers=[{ value:'anum.10p', name:'Anum Iftikhar'},
        { value:'saad', name:'Saad Khan (10P)'},
        { value:'asad.zubair', name:'Asad Zubair (10Pearls)'},
        { value:'nizar', name:'Nizar Ilyas (10Pearls)'},
        { value:'mubashir', name:'Mubashir Hussain (10Pearls)'},
        { value:'Ahmed.10p', name:'Ahmed Raza (10Pearls)'},
        { value:'sadaf.10p', name:'Sadaf Saeed'},
        { value:'sharjeel.ahmed', name:'Sharjeel Ahmed'},
        { value:'mudassir.10p', name:'Mudassir Khan'},
        { value:'saifullah.iqbal', name:'Saifullah Iqbal'},
        { value:'Ziauddin', namename:'Ziauddin'},
        { value:'Usman.10p', name:'usman.10p'},
        { value:'Kashif', name:'kashif'}
        ];    
                this.subTaskList=[{ SubTaskName:'Analysis'},                  /*create from xml*/
                        { SubTaskName:'Development'},
                        { SubTaskName:'DesignReview'},
                        { SubTaskName:'DesignDocument'},
                        { SubTaskName:'DesignTestCases'},
                        { SubTaskName:'CodeAudit'},
                        { SubTaskName:'CodeDeployment'},
                        { SubTaskName:'QaTesting'},
                        { SubTaskName:'CodeMerge'},
                        { SubTaskName:'FunctionalReview'},
                        { SubTaskName:'DeploymentToDev'},
                        { SubTaskName:'QaIntegration'}];
    }
    ngOnInit() {
      this.story = new FormGroup({
         Analysis: new FormControl(null,Validators.required),
         Development: new FormControl(null,Validators.required),
         DesignReview: new FormControl(null,Validators.required),
         DesignDocument: new FormControl(null,Validators.required), /**/
         DesignTestCases: new FormControl(null,Validators.required),
         CodeAudit: new FormControl(null,Validators.required),
         CodeDeployment: new FormControl(null,Validators.required),
         QaTesting : new FormControl(null,Validators.required),
         CodeMerge : new FormControl(null,Validators.required),
         FunctionalReview : new FormControl(null,Validators.required),
         DeploymentToDev : new FormControl(null,Validators.required),
         QaIntegration : new FormControl(null,Validators.required),
         UserName:new FormControl('saifullah.iqbal',Validators.required),
         Password:new FormControl('siqbal901',Validators.required),
         Ticket:new FormControl('',Validators.required)
      });
    }
     onSubmit(){
      debugger;
    let httpHelper=this._http;
        let assigneeArray = new FormArray([
        this.story.controls.Analysis,this.story.controls.Development,this.story.controls.DesignReview,this.story.controls.DesignDocument,this.story.controls.DesignTestCases,this.story.controls.CodeAudit,
        this.story.controls.CodeDeployment,this.story.controls.QaTesting,this.story.controls.CodeMerge
        ,this.story.controls.FunctionalReview,this.story.controls.DeploymentToDev,this.story.controls.QaIntegration
        ]);
        let ticketNum=this.story.controls.Ticket.value;
        let subtaskArr=this.subTaskList;
        let username=this.story.controls.UserName.value;
        let password=this.story.controls.Password.value;
        var headers = new Headers();        
        headers.append('Content-Type', 'application/json');
        let callsarr:any[]=[];
        // headers.append("Accept", 'application/json');

        assigneeArray.controls.forEach(function(el,index,assigneeArray){

        let data={
                "Jira":{
                            "fields": {
                                "project": {
                                    "key": "PHX"
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