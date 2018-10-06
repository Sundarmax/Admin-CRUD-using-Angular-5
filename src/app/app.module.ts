import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent  } from './home/home.component';
import { RoutingModule } from '../routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlightComponent } from './flight/flight.component';
import { AirlineComponent } from './airline/airline.component';
import { LoginComponent as AdminLoginComponent } from './admin/login/login.component';
import { AddComponent } from './admin/flight/add/add.component';
import { DetailComponent } from './admin/flight/detail/detail.component';
import { ListComponent } from './admin/flight/list/list.component';
import { IndexComponent } from './admin/index/index.component';
import { HomeComponent as AdminHomeComponent } from './admin/home/home.component';
//services
import {FlightserviceService} from '../app/Service/flightservice.service';
import { UserService } from '../app/Service/user.service';
import { AuthService } from '../app/Service/auth.service';
//modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FlightComponent,
    AirlineComponent,
    AdminLoginComponent,
    AddComponent,
    DetailComponent,
    ListComponent,
    IndexComponent,
    AdminHomeComponent,
    PagenotfoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ 
		timeOut: 3000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,
	}),
  ],
  providers: [FlightserviceService,AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }