"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).
    then(function (sucess) { return console.log('AppModule Started'); }).
    catch(function (error) { return console.log("Error loading AppModule"); });
//# sourceMappingURL=main.js.map