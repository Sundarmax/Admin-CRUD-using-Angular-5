import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../Service/flightservice.service';
import { flight } from '../Models/flight';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flight_list : Array<flight>;
  constructor(private _flightService:FlightserviceService) { }

  ngOnInit() {
    console.log('Api works');
    this._flightService.getFlightList().subscribe(
      res => {
        console.log('it works');
        console.log(res);
      },
      error =>{
        console.log('error');
        console.log(error);
      }
    )
  }

}
