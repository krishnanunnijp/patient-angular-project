import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {
  patient_name=""
  deletep=()=>
  {
    let data : any =
    {
      "patient_name":this.patient_name
    }
    console.log(data)
  }
}
