import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="Airline Management By Sundar .Rv";
  constructor() {
        console.log(this.title)
   }
}
