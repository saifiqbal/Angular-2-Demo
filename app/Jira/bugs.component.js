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
let BugsComponent = class BugsComponent {
    constructor(_http) {
        this._http = _http;
        this.subTaskList = [{ SubTaskName: 'Analysis' },
            { SubTaskName: 'Development' },
            { SubTaskName: 'DesignTestCases' },
            { SubTaskName: 'CodeAudit' },
            { SubTaskName: 'CodeDeployment' },
            { SubTaskName: 'QaTesting' },
            { SubTaskName: 'CodeMerge' },
            { SubTaskName: 'DeploymentToDev' },
            { SubTaskName: 'QaIntegration' }];
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
            { value: 'Ziauddin', name: 'Ziauddin' },
            { value: 'Usman.10p', name: 'usman.10p' },
            { value: 'Kashif', name: 'kashif' }];
    }
    ngOnInit() {
        this.bugs = new forms_1.FormGroup({
            Analysis: new forms_1.FormControl(null, forms_1.Validators.required),
            Development: new forms_1.FormControl(null, forms_1.Validators.required),
            DesignTestCases: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeAudit: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeDeployment: new forms_1.FormControl(null, forms_1.Validators.required),
            QaTesting: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeMerge: new forms_1.FormControl(null, forms_1.Validators.required),
            DeploymentToDev: new forms_1.FormControl(null, forms_1.Validators.required),
            QaIntegration: new forms_1.FormControl('', forms_1.Validators.required),
            UserName: new forms_1.FormControl('saifullah.iqbal', forms_1.Validators.required),
            Password: new forms_1.FormControl('siqbal901', forms_1.Validators.required),
            Ticket: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    onSubmit() {
        debugger;
        let httpHelper = this._http;
        let assigneeArray = new forms_1.FormArray([
            this.bugs.controls.Analysis, this.bugs.controls.Development, this.bugs.controls.DesignTestCases, this.bugs.controls.CodeAudit,
            this.bugs.controls.CodeDeployment, this.bugs.controls.QaTesting, this.bugs.controls.CodeMerge,
            this.bugs.controls.DeploymentToDev, this.bugs.controls.QaIntegration
        ]);
        let ticketNum = this.bugs.controls.Ticket.value;
        let subtaskArr = this.subTaskList;
        let username = this.bugs.controls.UserName.value;
        let password = this.bugs.controls.Password.value;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let callsarr = [];
        // headers.append("Accept", 'application/json');
        this.keyIndex = ticketNum.indexOf('-');
        if (this.keyIndex > 0) {
            var key = ticketNum.substring(0, this.keyIndex).toString();
        }
        else {
            var key = "";
        }
        // console.log(this.keyIndex);
        // console.log(key);
        // console.log(ticketNum.substring(0,this.keyIndex).toString());
        assigneeArray.controls.forEach(function (el, index, assigneeArray) {
            let data = {
                "Jira": {
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
BugsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bugs',
        templateUrl: 'bugs.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], BugsComponent);
exports.BugsComponent = BugsComponent;
//# sourceMappingURL=bugs.component.js.map