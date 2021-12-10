import { Component, OnInit } from '@angular/core';
import {RdvModel} from "../../Models/rdv.model";
import {RdvCommands} from "../../../Services/Commands/rdv.commands";

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.scss']
})

export class AddRdvComponent {

  constructor(private rdvCommands:RdvCommands) {

  }

  rdv = new RdvModel('', '', '', '');

  submitted = false;

  onCreateRdv() {
    this.rdvCommands.addRdvToFireBaseDataBase(this.rdv);
    this.submitted = true;
  }

}
