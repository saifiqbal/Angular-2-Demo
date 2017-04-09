"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const index_1 = require("./Users/index");
const login_component_1 = require("./Login/login.component");
const dashboard_component_1 = require("./DashBoard/dashboard.component");
const registration_component_1 = require("./Registration/registration.component");
const jira_component_1 = require("./jira/jira.component");
// import { AuthGuard } from './_guards/index';
const appRoutes = [
    { path: 'Users', component: index_1.UserComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: 'dashboard', component: dashboard_component_1.DashBoardComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'jira', component: jira_component_1.JiraComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map