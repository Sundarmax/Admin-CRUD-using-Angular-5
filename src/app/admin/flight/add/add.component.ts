import { Component, OnInit } from '@angular/core';
//service
import { FlightserviceService } from '../../../Service/flightservice.service';
import { ToastrService } from 'ngx-toastr';
import {Routes, Router,RouterModule,ActivatedRoute } from '@angular/router'
import { flight } from '../../../Models/flight';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  public newFlight = new flight;
  public index: any;
  constructor(private _flightService: FlightserviceService, private router: Router, private route: ActivatedRoute, private _toastr: ToastrService) {

    // Check for route params
    this.route.params.subscribe(params => {
      this.index = params['id'];
      // check if ID exists in route & call update or add methods accordingly
      if (this.index && this.index != null && this.index != undefined) {
        this.getFlightDetail(this.index);
      }
    });
  }

  ngOnInit() {
  }

  doRegister(): void {
    if(this.index == null)
    {
    this._flightService.registerFlight(this.newFlight).subscribe(
      res => {
        this._toastr.success('Flight info has Added')
        console.log('Data is Added');
        console.log(this.newFlight);
      },
      error => {
        console.log('Data Post Error.')
      }
    )
    }
    //do update
    else
    {
      this._flightService.updateFlight(this.index,this.newFlight).subscribe(
      res => {
        this._toastr.success('Flight info has updated'),
        console.log('Data updated'),
        this.router.navigate(['/admin'])
      },
      error => {
        console.log('Update error.')
      }
    )
    }
  }

  getFlightDetail(index: number): void {
    this._flightService.getFlightDetail(index).subscribe(
      res => {
        console.log('Get data success'),
          this.newFlight = res;
      },
      error => {
        console.log('Data error')
      }
    )
  }
  
}
