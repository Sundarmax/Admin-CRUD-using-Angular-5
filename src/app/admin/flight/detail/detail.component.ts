import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FlightserviceService } from '../../../Service/flightservice.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']

})
export class DetailComponent implements OnInit {
  public index: any;
  public flightDetail: any;
  constructor(private router: Router, private route: ActivatedRoute, private _flightService: FlightserviceService, private toastr: ToastrService) {
    // Get user detail index number sent in params
    this.route.params.subscribe(params => {
      this.index = params['id'];
      if (this.index && this.index != null && this.index != undefined) {
        this.getFlightDetail(this.index);
      }
    });
  }

  getFlightDetail(index: number): void {
    this._flightService.getFlightDetail(index).subscribe(
      res => {
        console.log('Get data success')
        this.flightDetail = res;
        console.log(res)
      },
      error => {
        console.log('Data error')
      }

    )
  }
  ngOnInit() {

  }


}
