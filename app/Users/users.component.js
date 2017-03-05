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
        var _this = this;
        this._userservice.getAllPersons().subscribe(function (users) { _this.users = users; });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'users.component.html',
    }),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=users.component.js.map