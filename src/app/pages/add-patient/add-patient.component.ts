import { Component, OnInit } from '@angular/core';
import {PatientModel} from "../../Models/patient.model";
import {PatientCommands} from "../../../Services/Commands/patient.commands";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})

export class AddPatientComponent {

  constructor(private patientCommands:PatientCommands) {

  }

  genders = ['Homme', 'Femme'];

  patient = new PatientModel('','', '', '' , '', '', '', this.genders[1]);

  submitted = false;

  onCreatePatient() {
    this.patientCommands.addPatientToFireBaseDataBase(this.patient);
    this.submitted = true;
  }

}
