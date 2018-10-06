import { Component, OnInit } from '@angular/core';
import { FlightserviceService} from '../Service/flightservice.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {

  public airlineList =[];
  constructor(private __airlineService: FlightserviceService) {
   }

  ngOnInit() {
  }

}
