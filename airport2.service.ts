


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Airport2Service {
  // public url: string;
  public url = "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text";

  constructor(private http: HttpClient) { }
  airports = (air) => {
    console.log("Recievedd");
    console.log(air);
    const options = {
      headers: {
        "X-RapidAPI-Host": "cometari-airportsfinder-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "9c995c67a6msh579ca6d182f5d70p1c6732jsnd284b3d81410"
      },
      params: {
        "text": air
      }
    };
    return this.http.get(this.url, options);
  };
}

