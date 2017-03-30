"use strict";
require("core-js/es6");
require("core-js/es7/reflect");
require('zone.js/dist/zone');
// Angular
require("@angular/animations");
require("@angular/compiler");
require("@angular/platform-browser");
require("@angular/platform-browser-dynamic");
require("@angular/core");
require("@angular/common");
require("@angular/http");
require("@angular/router");
require("@angular/forms");
// RxJS
require("rxjs");
require("angular2-uuid");
require("primeng/primeng");
//PrimeNG
require('primeng/resources/themes/omega/theme.css');
require('primeng/resources/primeng.min.css');
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
require('./styles.css');
/*define (['word'], function (word) {
  return function initFragment (element) {
    element.className += ' fragment-${fragmentName}-initialised';
    element.innerHTML += word;
  };
});*/
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map