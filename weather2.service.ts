import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Weather2Service {

  constructor(private http:HttpClient) { }
  public url="/assets/weather11.json";
  getdata2=(location)=>{
    console.log("Fron service");
    console.log(location);
    return this.http.get(this.url);
  }
}
