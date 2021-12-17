import { Component, OnInit } from '@angular/core';
import { PatientModel } from '../../Models/patient.model';
import PatientQuery from '../../../Services/Query/patient.query';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit {

  constructor(public PatientQuery: PatientQuery) { }

  patientList: Array<PatientModel> = [];

  ngOnInit() {
    this.getAllPatients();
  }

  public getAllPatients() {
    this.PatientQuery.getAllPatients().subscribe(patients => {
      this.patientList = patients as Array<PatientModel>;
      console.log(this.patientList)
    })
  }

}
