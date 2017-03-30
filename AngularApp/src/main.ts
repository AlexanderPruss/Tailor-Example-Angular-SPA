import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

// Angular
import '@angular/animations';
import '@angular/compiler';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
import '@angular/forms';

// RxJS
import 'rxjs';
import 'angular2-uuid';
import 'primeng/primeng';

//PrimeNG
require('primeng/resources/themes/omega/theme.css');
require('primeng/resources/primeng.min.css');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

require('./styles.css');

/*define (['word'], function (word) {
  return function initFragment (element) {
    element.className += ' fragment-${fragmentName}-initialised';
    element.innerHTML += word;
  };
});*/

platformBrowserDynamic().bootstrapModule(AppModule);

export function init(word:any){
  return function (template: any) {
    console.log("Attempted to initialize.");
  }
}
