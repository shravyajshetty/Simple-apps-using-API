import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import {Airport2Service} from './airport2.service';


@Component({
  selector: 'app-railways',
  templateUrl: './railways.page.html',
  styleUrls: ['./railways.page.scss'],
})
export class RailwaysPage implements OnInit {
airport1:any;
air:any;
  constructor(public airp:Airport2Service,private http:HttpClient) { }

  ngOnInit() {
  }
  airportsss=()=>{
  this.airp.airports(this.airport1).subscribe((res:any)=>
  {
    this.airport1=res;
    console.log("Recieved",this.airport1);

  })
}

  

}
