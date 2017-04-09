"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const app_component_1 = require("./app.component");
const app_routing_1 = require("./app.routing");
const users_component_1 = require("./Users/users.component");
const registration_component_1 = require("./Registration/registration.component");
const dashboard_component_1 = require("./DashBoard/dashboard.component");
const login_component_1 = require("./Login/login.component");
const navbar_component_1 = require("./Common/navbar.component");
const router_1 = require("@angular/router");
/*Services*/
const users_service_1 = require("./Services/users.service");
const auth_service_1 = require("./Services/auth.service");
const global_events_1 = require("./Events/global.events");
const bugs_component_1 = require("./jira/bugs.component");
const story_component_1 = require("./jira/story.component");
const jira_component_1 = require("./jira/jira.component");
let AppModule = class AppModule {
};
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