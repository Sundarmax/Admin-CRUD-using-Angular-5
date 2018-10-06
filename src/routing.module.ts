import {Routes,RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './app/login/login.component';
import {RegisterComponent} from './app/register/register.component';
import {HomeComponent} from './app/home/home.component';
import {NgModule} from '@angular/core';
import { FlightComponent } from './app/flight/flight.component';
import { AirlineComponent } from './app/airline/airline.component';
import { LoginComponent as AdminLoginComponent } from './app/admin/login/login.component';
import { AddComponent as AdminAddComponent } from './app/admin/flight/add/add.component';
import { IndexComponent } from './app/admin/index/index.component';
import { ListComponent } from './app/admin/flight/list/list.component';
import { DetailComponent } from './app/admin/flight/detail/detail.component';
import { HomeComponent as AdminHomeComponent } from './app/admin/home/home.component';
import { AuthService } from './app/Service/auth.service';
import {  PagenotfoundComponent } from './app/pagenotfound/pagenotfound.component';
import { TestComponent } from './app/test/test.component';
const routes: Routes = [
    {
        path: 'admin',
        component : AdminHomeComponent,
        children : [
            {
                path: '',
                component: ListComponent
              },
              {
                path: 'add',
                component: AdminAddComponent
              },
              {
                path: 'update/:id',
                component: AdminAddComponent
              },
              {
                path: 'detail/:id',
                component: DetailComponent
              }
            
        ],
        canActivate : [AuthService]
    },
    {
        path: 'adminlog',
        component: AdminLoginComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {path : 'test', component: TestComponent},
    {path : 'flight', component: FlightComponent},
    {
        path: '**',
        component :  PagenotfoundComponent
    }
    /*
    {path :  '', component: HomeComponent },
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent },
    {path : 'flight', component : FlightComponent},
    {path : 'home', component: HomeComponent},
    {path : 'airline', component:AirlineComponent},
    {path : 'admin', component:AdminLoginComponent},
    {path : 'add', component: AdminAddComponent},
    {path : 'index', component:IndexComponent },
    {path : 'detail',component: DetailComponent}*/
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {};
