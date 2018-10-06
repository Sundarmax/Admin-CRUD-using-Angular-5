import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../Service/flightservice.service';
import { flight  } from '../Models/flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  public flight_list = [];
     
  constructor(private _flightService:FlightserviceService) { }
  
  ngOnInit() {
    this._flightService.getFlightList().subscribe(
      res =>{
        console.log('Api binding done');
        this.flight_list=res;
        console.log(this.flight_list);
      },
      error =>{
        console.log('error');
      })

    }
}