import { Component, OnInit } from '@angular/core';
import {PatientModel} from "../../Models/patient.model";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})

export class AddPatientComponent {

  genders = ['Homme', 'Femme'];

  model = new PatientModel('Gaelle', 'Bauvin', '1999-11-30' , 'gaelle@bauvin.com', '0612345678', '155 rue du molinel, Lille', this.genders[1]);

  newMedecin(){
    this.model = new PatientModel('', '', new Date().toISOString().substring(0,10), '', '', '', '');
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

}
