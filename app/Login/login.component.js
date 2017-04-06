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
var auth_service_1 = require("../Services/auth.service");
var router_1 = require("@angular/router");
var global_events_1 = require("../Events/global.events");
var LoginComponent = (function () {
    function LoginComponent(authService, _router, eventManager) {
        this.authService = authService;
        this._router = _router;
        this.eventManager = eventManager;
        this.userInfo = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log('login');
        /*pass userInfo to authentication service*/
        this.eventManager.showNavBar(true);
        this._router.navigate(['dashboard']);
        // console.log(this.userInfo);
        // this.authService.loginfn(this.userInfo).then((res)=>{
        //     if(res){
        //         this.eventManager.showNavBar(true);
        //         this._router.navigate(['DashBoard']);
        //     }
        //     else
        //         console.log(res);
        // })
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'login.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, global_events_1.GlobalEventsManager])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map