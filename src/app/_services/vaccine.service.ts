import { Injectable } from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';

import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  baseUrl = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?';
   date = new Date();
 dateString= this.datePipe.transform(this.date,"dd-MM-yyyy");
  constructor(private http :HttpClient,private datePipe: DatePipe) { }

  findVaccineChittorgarh(model:any)
  {
    const opts={params : new HttpParams({fromString:"district_id=521&date="+this.dateString})};
    return this.http.get(this.baseUrl,opts);
  }

  findVaccinePratapgarh(model:any)
  {
    const opts={params : new HttpParams({fromString:"district_id=522&date="+this.dateString})};
    return this.http.get(this.baseUrl,opts);
  }

  findVaccineUdaipur(model:any)
  {
    const opts={params : new HttpParams({fromString:"district_id=504&date="+this.dateString})};
    return this.http.get(this.baseUrl,opts);
  }
}
