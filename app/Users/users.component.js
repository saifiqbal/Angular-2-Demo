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
var core_1 = require("@angular/core");
var users_service_1 = require("../Services/users.service");
require("rxjs/add/operator/map");
var UserComponent = (function () {
    function UserComponent(_userservice) {
        this._userservice = _userservice;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    UserComponent.prototype.loadAllUsers = function () {
        //this._userservice.getAllPersons().subscribe(users => { this.users = users;});
        this.users = [
            { "UserName": "Saif10P", "FirstName": "Saif", "LastName": "Iqbal" },
            { "UserName": "10Pearls", "FirstName": "Saifullah", "LastName": "Iqbal" },
            { "UserName": "Avizia1", "FirstName": "Started", "LastName": "Test" },
            { "UserName": "Zia10", "FirstName": "Available", "LastName": "Test" },
            { "UserName": "Ibad10", "FirstName": "Ready", "LastName": "Test" },
            { "UserName": "Yasir10", "FirstName": "Started", "LastName": "Test" },
            { "UserName": "Ahmar101", "FirstName": "Available", "LastName": "Test" },
            { "UserName": "Mudassir10P", "FirstName": "Ready", "LastName": "Test" },
            { "UserName": "Test", "FirstName": "Started", "LastName": "Test" },
            { "UserName": "Test10p", "FirstName": "Available", "LastName": "Test" },
            { "UserName": "Test101p", "FirstName": "Ready", "LastName": "Test" },
            { "UserName": "Test1001P", "FirstName": "Started", "LastName": "Test" }
        ];
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'users.component.html',
        styleUrls: ['userStyle.css']
    }),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=users.component.js.map