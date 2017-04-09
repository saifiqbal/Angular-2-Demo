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
let RegistrationComponent = class RegistrationComponent {
    constructor() {
    }
    ngOnInit() {
        this.user = new forms_1.FormGroup({
            FirstName: new forms_1.FormControl(null, forms_1.Validators.required),
            LastName: new forms_1.FormControl(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(15)])),
            Email: new forms_1.FormControl(null, forms_1.Validators.required),
            CellPhone: new forms_1.FormControl(null, forms_1.Validators.required),
            Country: new forms_1.FormControl(null, forms_1.Validators.required),
            State: new forms_1.FormControl(null, forms_1.Validators.required),
            City: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    }
    Test(event) {
        debugger;
        console.log('Button click event in registration');
    }
    onSubmit(data) {
        debugger;
        console.log('you submitted Form');
        console.log(data);
        console.log(this.user.value);
    }
};
RegistrationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: 'registration.component.html'
    }),
    __metadata("design:paramtypes", [])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map