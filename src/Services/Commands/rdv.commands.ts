import {AngularFirestore} from "@angular/fire/compat/firestore";
import {RdvModel} from "../../app/Models/rdv.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})

export class RdvCommands {
  constructor(private angularFireStore:AngularFirestore) {
  }

  addRdvToFireBaseDataBase(rdv: RdvModel){
    this.angularFireStore.collection('rdv').add(JSON.parse(JSON.stringify(rdv)))
  }
}
