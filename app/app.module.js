"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var users_component_1 = require("./Users/users.component");
var registration_component_1 = require("./Registration/registration.component");
var dashboard_component_1 = require("./DashBoard/dashboard.component");
var login_component_1 = require("./Login/login.component");
var navbar_component_1 = require("./Common/navbar.component");
var router_1 = require("@angular/router");
/*Services*/
var users_service_1 = require("./Services/users.service");
var auth_service_1 = require("./Services/auth.service");
var global_events_1 = require("./Events/global.events");
var bugs_component_1 = require("./jira/bugs.component");
var story_component_1 = require("./jira/story.component");
var jira_component_1 = require("./jira/jira.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            users_component_1.UserComponent,
            registration_component_1.RegistrationComponent,
            dashboard_component_1.DashBoardComponent,
            login_component_1.LoginComponent,
            navbar_component_1.NavBarComponent,
            bugs_component_1.BugsComponent,
            jira_component_1.JiraComponent,
            story_component_1.StoryComponent
        ],
        providers: [
            users_service_1.UserService,
            auth_service_1.AuthService,
            global_events_1.GlobalEventsManager
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map