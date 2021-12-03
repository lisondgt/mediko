import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MedecinModel} from "../../app/Models/medecin.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})

export class MedecinCommands {
  constructor(private angularFireStore:AngularFirestore) {
  }

  addMedecinToFireBaseDataBase(medecin: MedecinModel){
    this.angularFireStore.collection('medecin').add(JSON.parse(JSON.stringify(medecin)))
  }}
