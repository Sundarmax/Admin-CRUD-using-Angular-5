import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flight } from '../Models/flight'
import { login } from '../Models/login';
import { HelperService } from '../Service/helperService';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  private url: string = "http://localhost:8000/";
  private urlf: string = "http://localhost:8000/flight_list/";

  
  constructor(private httpclient: HttpClient) { }
  getFlightList(): Observable<flight[]> {
    return this.httpclient.get<flight[]>(this.url + 'flight_list', { headers: HelperService.getAuthHeader() })
  }

  getFlightDetail(someId: number): Observable<flight> {
    return this.httpclient.get<flight>(this.urlf + someId, { headers: HelperService.getAuthHeader() })
  }
  registerFlight(flight_info): Observable<flight[]> {
    return this.httpclient.post<flight[]>(this.url + 'flight_list/', flight_info, { headers: HelperService.getAuthHeader() })
  }
 
  deleteFlight(someId: number): Observable<flight[]> {
    return this.httpclient.delete<flight[]>(this.urlf + someId, { headers: HelperService.getAuthHeader() })
  }
  updateFlight(someId: number, flight_info): Observable<flight[]> {
    return this.httpclient.put<flight[]>(this.urlf + someId, flight_info ,{ headers: HelperService.getAuthHeader() })
  }

}

