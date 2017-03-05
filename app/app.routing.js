"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./Users/index");
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/index';
var registration_component_1 = require("./Registration/registration.component");
// import { AuthGuard } from './_guards/index';
var appRoutes = [
    { path: 'Users', component: index_1.UserComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map