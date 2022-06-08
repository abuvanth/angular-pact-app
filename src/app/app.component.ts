import { Component } from '@angular/core';
declare var require: any
const pact = require("pact-lang-api")
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pact-test';
  constructor(){
    console.log(pact.crypto.genKeyPair())
  }
}
