import {Component, OnInit} from "@angular/core";

require('./app.component.css');

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
     <h1>{{title}}</h1>
     <p>We've loaded everything!</p>
    `
})
export class AppComponent implements OnInit {

  title = 'My Application';

  constructor() {
  }

  ngOnInit() {
  }

}
