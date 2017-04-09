"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
require("rxjs/Observable");
require("rxjs/add/observable/forkJoin");
require("rxjs/add/operator/map");
const Observable_1 = require("rxjs/Observable");
let StoryComponent = class StoryComponent {
    constructor(_http) {
        this._http = _http;
        this.jiraUsers = [{ value: 'anum.10p', name: 'Anum Iftikhar' },
            { value: 'saad', name: 'Saad Khan (10P)' },
            { value: 'asad.zubair', name: 'Asad Zubair (10Pearls)' },
            { value: 'nizar', name: 'Nizar Ilyas (10Pearls)' },
            { value: 'mubashir', name: 'Mubashir Hussain (10Pearls)' },
            { value: 'Ahmed.10p', name: 'Ahmed Raza (10Pearls)' },
            { value: 'sadaf.10p', name: 'Sadaf Saeed' },
            { value: 'sharjeel.ahmed', name: 'Sharjeel Ahmed' },
            { value: 'mudassir.10p', name: 'Mudassir Khan' },
            { value: 'saifullah.iqbal', name: 'Saifullah Iqbal' },
            { value: 'Ziauddin', namename: 'Ziauddin' },
            { value: 'Usman.10p', name: 'usman.10p' },
            { value: 'Kashif', name: 'kashif' }
        ];
        this.subTaskList = [{ SubTaskName: 'Analysis' },
            { SubTaskName: 'Development' },
            { SubTaskName: 'DesignReview' },
            { SubTaskName: 'DesignDocument' },
            { SubTaskName: 'DesignTestCases' },
            { SubTaskName: 'CodeAudit' },
            { SubTaskName: 'CodeDeployment' },
            { SubTaskName: 'QaTesting' },
            { SubTaskName: 'CodeMerge' },
            { SubTaskName: 'FunctionalReview' },
            { SubTaskName: 'DeploymentToDev' },
            { SubTaskName: 'QaIntegration' }];
    }
    ngOnInit() {
        this.story = new forms_1.FormGroup({
            Analysis: new forms_1.FormControl(null, forms_1.Validators.required),
            Development: new forms_1.FormControl(null, forms_1.Validators.required),
            DesignReview: new forms_1.FormControl(null, forms_1.Validators.required),
            DesignDocument: new forms_1.FormControl(null, forms_1.Validators.required),
            DesignTestCases: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeAudit: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeDeployment: new forms_1.FormControl(null, forms_1.Validators.required),
            QaTesting: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeMerge: new forms_1.FormControl(null, forms_1.Validators.required),
            FunctionalReview: new forms_1.FormControl(null, forms_1.Validators.required),
            DeploymentToDev: new forms_1.FormControl(null, forms_1.Validators.required),
            QaIntegration: new forms_1.FormControl(null, forms_1.Validators.required),
            UserName: new forms_1.FormControl('saifullah.iqbal', forms_1.Validators.required),
            Password: new forms_1.FormControl('siqbal901', forms_1.Validators.required),
            Ticket: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    onSubmit() {
        debugger;
        let httpHelper = this._http;
        let assigneeArray = new forms_1.FormArray([
            this.story.controls.Analysis, this.story.controls.Development, this.story.controls.DesignReview, this.story.controls.DesignDocument, this.story.controls.DesignTestCases, this.story.controls.CodeAudit,
            this.story.controls.CodeDeployment, this.story.controls.QaTesting, this.story.controls.CodeMerge,
            this.story.controls.FunctionalReview, this.story.controls.DeploymentToDev, this.story.controls.QaIntegration
        ]);
        let ticketNum = this.story.controls.Ticket.value;
        let subtaskArr = this.subTaskList;
        let username = this.story.controls.UserName.value;
        let password = this.story.controls.Password.value;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let callsarr = [];
        // headers.append("Accept", 'application/json');
        assigneeArray.controls.forEach(function (el, index, assigneeArray) {
            let data = {
                "Jira": {
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
                "credentials": {
                    "username": username,
                    "password": password
                }
            };
            let body = JSON.stringify(data);
            let options = new http_1.RequestOptions({ headers: headers });
            let calls = httpHelper.post('http://localhost:5000/api/CreateSubTask', body, options).map((res) => res.json());
            callsarr.push(calls);
        });
        Observable_1.Observable.forkJoin(callsarr).subscribe(results => {
            console.log(results);
        });
    }
};
StoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'story',
        templateUrl: 'story.component.html' /*create dynamic template based on xml file*/
    }),
    __metadata("design:paramtypes", [http_1.Http])
], StoryComponent);
exports.StoryComponent = StoryComponent;
//# sourceMappingURL=story.component.js.map