import { Component, OnInit } from '@angular/core';
import { FlightserviceService} from '../Service/flightservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  flightListData:any;
  constructor( private _flightService:FlightserviceService) { 
  }



  login_info={
    username : 'airline',
    password : 'airline'
  };

  ngOnInit() {
    /* 
    this._flightService.adminUser(this.login_info).subscribe(
      res => {
        console.log('Login Success.');
        console.log(res)
      },
      error => {
        console.log('Login Error.')
      }
    ) */
  }
 /*  getFlightList() {
    this._flightService.getFlightDetail().subscribe(
      res => {
        console.log('Data Fetch Success.');
        this.flightListData = res;
      },
      error => {
        console.log('Data Fetch Error.')
      }
    )
  } */

}
