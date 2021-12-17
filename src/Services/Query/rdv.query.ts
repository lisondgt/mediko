import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export default class RdvQuery {
  constructor(private afs: AngularFirestore) { }

  getAllRdv() {
    return this.afs.collectionGroup('rdv').valueChanges({ idField: 'id' })
  }
}
