import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../../../Service/flightservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public flightList: any;
  public flightListData: any;
  constructor(private _flightService: FlightserviceService, private toastr: ToastrService) {
    this.getFlightList();
  }
  getFlightList(): void {
    this._flightService.getFlightList().subscribe(
      res => {
        console.log('Data Fetch Success.');
        this.flightListData = res;
      },
      error => {
        console.log('Data Fetch Error.')
      }
    )
  }
  deleteFlight(index: number): void {
    this._flightService.deleteFlight(index).subscribe(
      res => {
        console.log('data deleted');
        this.toastr.success('Records', "Deleted");
      },
      error => {
        console.log('Deletion error.')
      }
    )
    this.getFlightList();
  }
  ngOnInit() {
  }

}
