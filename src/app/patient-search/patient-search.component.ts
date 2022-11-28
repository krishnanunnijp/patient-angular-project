import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {
  patient_name=""

  searchp=()=>
  {
    let data:any=
    {
    "patient_name":this.patient_name

    }
    console.log(data)
  }
  
}
