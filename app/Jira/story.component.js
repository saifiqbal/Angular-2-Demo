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
let StoryComponent = class StoryComponent {
    constructor() { }
    ngOnInit() {
        this.user = new forms_1.FormGroup({
            Analysis: new forms_1.FormControl(null, forms_1.Validators.required),
            DesignReview: new forms_1.FormControl(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(15)])),
            DesignDocument: new forms_1.FormControl(null, forms_1.Validators.required),
            DesignTestCases: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeAudit: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeDeployment: new forms_1.FormControl(null, forms_1.Validators.required),
            QATesting: new forms_1.FormControl(null, forms_1.Validators.required),
            CodeMerge: new forms_1.FormControl(null, forms_1.Validators.required),
            FunctionalReview: new forms_1.FormControl(null, forms_1.Validators.required),
            DeploymentToDev: new forms_1.FormControl(null, forms_1.Validators.required),
            QAIntegration: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    }
};
StoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'story',
        templateUrl: 'story.component.html' /*create dynamic template based on xml file*/
    }),
    __metadata("design:paramtypes", [])
], StoryComponent);
exports.StoryComponent = StoryComponent;
//# sourceMappingURL=story.component.js.map