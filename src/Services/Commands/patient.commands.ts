import {AngularFirestore} from "@angular/fire/compat/firestore";
import {PatientModel} from "../../app/Models/patient.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})

export class PatientCommands {
  constructor(private angularFireStore:AngularFirestore) {
  }

  addPatientToFireBaseDataBase(patient: PatientModel){
    this.angularFireStore.collection('patient').add(JSON.parse(JSON.stringify(patient)))
  }
}
