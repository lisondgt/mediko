import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export default class PatientQuery {
  constructor(private afs: AngularFirestore) { }

  getAllPatients() {
    return this.afs.collectionGroup('patient').valueChanges({ idField: 'id' })
  }
}
