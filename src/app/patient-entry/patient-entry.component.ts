import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  name=""
  patient_id=""
  address=""
  contact_number=""
  date_of_appoinmet=""
  patient_image=""
  doctor_name=""
  patientEnter=()=>
  {
    let data : any =
    {
      
  "name":this.name,
  "patient_id":this.patient_id,
  "address":this.address,
  "contact_number":this.contact_number,
  "date_of_appoinmet":this.date_of_appoinmet,
  "patient_image":this.patient_image,
  "doctor_name":this.doctor_name
    }
    console.log(data)
  }

}
