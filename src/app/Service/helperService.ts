import {HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

export class HelperService
{
    public static getAuthHeader(){
        return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Token "+ HelperService.getAccessToken() });
    }
    
    public static getAccessToken(){
        return localStorage.getItem('userToken');
    }

    public static saveAccessToken(token){
        return localStorage.setItem('userToken',token);
    }
}