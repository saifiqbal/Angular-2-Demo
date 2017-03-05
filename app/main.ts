import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).
then(sucess=>console.log('AppModule Started')).
catch(error=>console.log("Error loading AppModule"));