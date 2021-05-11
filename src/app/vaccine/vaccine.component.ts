import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import { VaccineService} from '../_services/vaccine.service';
import { VaccineModel} from '../Interfaces/VaccineModel';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {

model:any={};

  constructor(private vaccineService :VaccineService) { }

  vaccineData :any;

  availableVaccine : any ={};

  vaccineChittorgarh :VaccineModel[]=[];

  vaccinePratapgarh :VaccineModel[]=[];

  vaccineUdaipur :VaccineModel[]=[];


  ngOnInit(): void {
    this.findVaccineChittorgarh();
    this.findVaccinePratapgarh();
    this.findVaccineUdaipur();
    this.PrintValues();
  }

  PrintValues()
  {
    console.log(this.vaccineChittorgarh);
  }

  findVaccineChittorgarh()
  {
    this.vaccineService.findVaccineChittorgarh(this.model).subscribe(
      response => {
       this.vaccineData=response;
   //    console.log(this.vaccineData);
    //   console.log(this.vaccineData.centers[0]);
       this.vaccineData.centers.forEach(element => {
        if(element.sessions!=null)
        {
          element.sessions.forEach(sessionData => {
            if(sessionData.min_age_limit==18 && sessionData.available_capacity>0)
            {
             this.vaccineChittorgarh.push(
             {
               city:element.name,
               count:sessionData.available_capacity,
               vaccineDate :sessionData.date
             });
            }
          });
        }
      })
      },
      error => {
        console.log(error);
      }
      
    );
    
     
 
  }

  findVaccinePratapgarh()
  {
    this.vaccineService.findVaccinePratapgarh(this.model).subscribe(
      response => {
       this.vaccineData=response;
    //   console.log(this.vaccineData);
    //   console.log(this.vaccineData.centers[0]);
       this.vaccineData.centers.forEach(element => {
        if(element.sessions!=null)
        {
          element.sessions.forEach(sessionData => {
            if(sessionData.min_age_limit==18 && sessionData.available_capacity>0)
            {
             this.vaccinePratapgarh.push(
             {
               city:element.name,
               count:sessionData.available_capacity,
               vaccineDate :sessionData.date
             });
            }
          });
        }
      })
      },
      error => {
        console.log(error);
      }
      
      
    );
    
     
 
  }

  findVaccineUdaipur()
  {
    this.vaccineService.findVaccineUdaipur(this.model).subscribe(
      response => {
       this.vaccineData=response;
     //  console.log(this.vaccineData);
     //  console.log(this.vaccineData.centers[0]);
       this.vaccineData.centers.forEach(element => {
        if(element.sessions!=null)
        {
          element.sessions.forEach(sessionData => {
            if(sessionData.min_age_limit==18 && sessionData.available_capacity>0)
            {
             // console.log(sessionData.date);
             this.vaccineUdaipur.push(
             {
               city:element.name,
               count:sessionData.available_capacity,
               vaccineDate:sessionData.date
             });
            }
          });
        }
      })
      },
      error => {
        console.log(error);
      }
      
     
    );
    
     
 //   console.log(this.vaccineUdaipur);
     
  }

}
