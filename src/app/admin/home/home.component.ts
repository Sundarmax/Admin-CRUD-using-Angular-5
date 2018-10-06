import { Component, OnInit } from '@angular/core';
import {Router,Routes,RouterModule} from '@angular/router';
//service
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public active: string;
  constructor(private router: Router, private toastr: ToastrService) {
    // Detect route changes for active sidebar menu
    this.router.events.subscribe((val) => {
      this.routeChanged(val);
    });
  }

  ngOnInit() {
  }
  // Detect route changes for active sidebar menu
  routeChanged(val): void {
    this.active = val.url;
  }

  // Logout User
  logOut(): void {
    this.toastr.success('Success', "Logged Out Successfully");
    localStorage.removeItem('userToken');
    this.router.navigate(['/adminlog']);
  }
}
