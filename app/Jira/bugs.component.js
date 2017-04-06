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
const forms_1 = require("@angular/forms");
let BugsComponent = class BugsComponent {
    constructor() {
        this.jiraUsers = [{ name: 'anum.10p', value: 'Anum Iftikhar' },
            { name: 'saad', value: 'Saad Khan (10P)' },
            { name: 'asad.zubair', value: 'Asad Zubair (10Pearls)' },
            { name: 'nizar', value: 'Nizar Ilyas (10Pearls)' },
            { name: 'mubashir', value: 'Mubashir Hussain (10Pearls)' },
            { name: 'Ahmed.10p', value: 'Ahmed Raza (10Pearls)' },
            { name: 'sadaf.10p', value: 'Sadaf Saeed' },
            { name: 'sharjeel.ahmed', value: 'Sharjeel Ahmed' },
            { name: 'mudassir.10p', value: 'Mudassir Khan' },
            { name: 'saifullah.iqbal', value: 'Saifullah Iqbal' },
            { name: 'Ziauddin', value: 'Ziauddin' },
            { name: 'Usman.10p', value: 'usman.10p' },
            { name: 'Kashif', value: 'kashif' }
        ];
    }
    ngOnInit() {
        this.bugs = new forms_1.FormGroup({
            Analysis: new forms_1.FormControl(null, forms_1.Validators.required),
            Development: new forms_1.FormControl(null, forms_1.Validators.required),
            DesignDocument: new forms_1.FormControl(null, forms_1.Validators.required),
            DesignTestCases: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeAudit: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeDeployment: new forms_1.FormControl(null, forms_1.Validators.required),
            QaTesting: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeMerge: new forms_1.FormControl(null, forms_1.Validators.required),
            DeploymentToDev: new forms_1.FormControl(null, forms_1.Validators.required),
            QaIntegration: new forms_1.FormControl('', forms_1.Validators.required),
        });
    }
    CreateSubTask() {
        console.log('test');
    }
};
BugsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bugs',
        templateUrl: 'bugs.component.html'
    }),
    __metadata("design:paramtypes", [])
], BugsComponent);
exports.BugsComponent = BugsComponent;
//# sourceMappingURL=bugs.component.js.map