"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./Users/index");
var login_component_1 = require("./Login/login.component");
var dashboard_component_1 = require("./DashBoard/dashboard.component");
var registration_component_1 = require("./Registration/registration.component");
// import { AuthGuard } from './_guards/index';
var appRoutes = [
    { path: 'Users', component: index_1.UserComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: 'dashboard', component: dashboard_component_1.DashBoardComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map