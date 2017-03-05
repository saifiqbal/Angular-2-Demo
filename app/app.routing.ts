import { Routes,RouterModule } from '@angular/router';

import { UserComponent } from './Users/index';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/index';
 import { RegistrationComponent } from './Registration/registration.component';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'Users', component: UserComponent },
    { path: 'register', component: RegistrationComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);