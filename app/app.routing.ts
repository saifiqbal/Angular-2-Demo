import { Routes,RouterModule } from '@angular/router';

import { UserComponent } from './Users/index';
import { LoginComponent } from './Login/login.component';
import { DashBoardComponent } from './DashBoard/dashboard.component';
import { RegistrationComponent } from './Registration/registration.component';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'Users', component: UserComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'dashboard', component: DashBoardComponent },
    { path:'login',component:LoginComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);