import { Component, OnInit } from '@angular/core';
import { RdvModel } from '../../Models/rdv.model';
import RdvQuery from '../../../Services/Query/rdv.query';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.scss']
})

export class RdvComponent implements OnInit {

  constructor(public RdvQuery: RdvQuery) { }

  rdvList: Array<RdvModel> = [];

  ngOnInit() {
    this.getAllRdv();
  }

  public getAllRdv() {
    this.RdvQuery.getAllRdv().subscribe(rdv => {
      this.rdvList = rdv as Array<RdvModel>;
      console.log(this.rdvList)
    })
  }

}
