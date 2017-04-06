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
var global_events_1 = require("../Events/global.events");
var NavBarComponent = (function () {
    function NavBarComponent(_eventManager) {
        var _this = this;
        this._eventManager = _eventManager;
        this.showNavBar = false;
        this._eventManager._showNavBarEmitter.subscribe(function (mode) {
            if (mode !== null) {
                _this.showNavBar = mode;
            }
        });
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'navbar.component.html',
        selector: 'navbar'
    }),
    __metadata("design:paramtypes", [global_events_1.GlobalEventsManager])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map