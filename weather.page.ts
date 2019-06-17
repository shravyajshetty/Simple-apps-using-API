import { Component, OnInit } from '@angular/core';
import {Weather2Service} from './weather2.service';
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weather1:any;
  location: string;
  weatherr:[{"cityname":"Uk"},{"Weather":"moderate rain"},{"Wind":"2.6"},{"Rain":"1hr"}]
  constructor( public weathr:Weather2Service,private http:HttpClient) { 
    // this.weathr.getdata2().subscribe((res:any)=>
    // {
    //   console.log("Recieved",res);
    //   this.weather1=res;
    // })    
  }

  ngOnInit() {
   
  }

  getWeather = ()=>{
    this.weathr.getdata2(this.location).subscribe((res:any)=>
    {
      console.log("Recieved",res);
      this.weather1=res;
    })
   
  }

}
