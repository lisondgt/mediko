import { Component, OnInit } from '@angular/core';
import { MedecinModel } from '../../Models/medecin.model';
import MedecinQuery from '../../../Services/Query/medecin.query';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})

export class MedecinComponent implements OnInit {

  constructor(public MedecinQuery: MedecinQuery) { }

  medecinList: Array<MedecinModel> = [];

  ngOnInit() {
    this.getAllMedecins();
  }

  public getAllMedecins() {
    this.MedecinQuery.getAllMedecins().subscribe(medecins => {
      this.medecinList = medecins as Array<MedecinModel>;
      console.log(this.medecinList)
    })
  }

}
