import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { RouterModule, Routes, Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { ValidationService } from '../../Service/config.service';
import { observable } from 'rxjs';
import { FlightserviceService } from '../../Service/flightservice.service';
import { user } from '../../Models/user';
import { HelperService } from '../../Service/helperService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public Model = new user;
	constructor(private router: Router, private userService: UserService, private toastr: ToastrService, private flightService: FlightserviceService) { }

	// Check if user already logged in
	ngOnInit() {
		if (HelperService.getAccessToken()) {
			this.router.navigate(['/admin']);
		}
	}

	// Initicate login	
	doLogin() {
		return this.userService.doLogin(this.Model).subscribe(
			res => {
				HelperService.saveAccessToken(res.token)
				console.log("abcd")
				this.router.navigate(['/admin']);
				this.toastr.success('Success', "Logged In Successfully");
			},
			error => {
			  console.log('Data Fetch Error.');
			  this.toastr.error('Failed', "Invalid Credentials");
			}
		  );
	}
}
