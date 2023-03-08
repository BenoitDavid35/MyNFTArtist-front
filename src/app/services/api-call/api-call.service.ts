import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'http://vps696635.ovh.net:3000/';

//const httpOptions = {
//  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//};

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  callServer(route: string, values: string){
    return this.http.post<any>(API_URL + route,{values});
  }
}
