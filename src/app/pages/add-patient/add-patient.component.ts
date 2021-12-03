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

  patient = new PatientModel('Gaelle', 'Bauvin', '1999-11-30' , 'gaelle@bauvin.com', '0612345678', '155 rue du molinel, Lille', this.genders[1]);

  newMedecin(){
    this.patient = new PatientModel('', '', new Date().toISOString().substring(0,10), '', '', '', '');
  }

  submitted = false;

  onCreatePatient() {
    this.patientCommands.addPatientToFireBaseDataBase(this.patient);
    this.submitted = true;
  }

}
