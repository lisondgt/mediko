import { Component, OnInit } from '@angular/core';
import {MedecinModel} from "../../Models/medecin.model";
import {MedecinCommands} from "../../../Services/Commands/medecin.commands";

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.scss']
})

export class AddMedecinComponent {

  constructor(private medecinCommands:MedecinCommands) {

  }

  professions = ['Médecin généraliste', 'Ostéopathe',
    'Kinésithérapeute'];

  model = new MedecinModel('Lison', 'd\'agostini', this.professions[0], 'lison@dagostini.com', '0612345678');

  newMedecin(){
    this.model = new MedecinModel('', '', '', '', '');
  }

  submitted = false;

  onSubmit() {
    this.medecinCommands.addMedecinToFireBaseDataBase(this.model);
    this.submitted = true;
  }

}
