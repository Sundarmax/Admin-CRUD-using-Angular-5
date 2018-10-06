import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { login } from '../Models/login';
import { Observable } from 'rxjs';
import { FlightserviceService } from '../Service/flightservice.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
	private url: string = "http://localhost:8000/";
	constructor(private httpclient: HttpClient, private _flightService: FlightserviceService) { }
	log: number = 0;
	public userData: any;

	doLogin(login_info): Observable<login> {
		return this.httpclient.post<login>(this.url + 'api/login', login_info)
	}
}