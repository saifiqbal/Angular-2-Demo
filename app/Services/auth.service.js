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
require("rxjs/add/operator/map");
let AuthService = class AuthService {
    constructor(_http) {
        this._http = _http;
    }
    loginfn(userCredentials) {
        var header = new http_1.Headers();
        var creds = "username=" + userCredentials.username + "&" + "password:" + userCredentials.password;
        header.append('Content-Type', 'application/X-www-form=urlencoded');
        return new Promise((resolve) => {
            this._http.post('http://localhost:5000/api/authenticate', creds, { headers: header }).subscribe((data) => {
                if (data.json().success) {
                    window.localStorage.setItem('auth-key', data.json().key);
                    this.isLoggedIn = true;
                }
                resolve(this.isLoggedIn);
            });
        });
    }
};
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map