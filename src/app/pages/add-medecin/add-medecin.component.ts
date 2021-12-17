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

  medecin = new MedecinModel('','', '', this.professions[0], '', '');

  submitted = false;

  onCreateMedecin() {
    this.medecinCommands.addMedecinToFireBaseDataBase(this.medecin);
    this.submitted = true;
  }

}
