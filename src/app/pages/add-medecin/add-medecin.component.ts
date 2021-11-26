import { Component, OnInit } from '@angular/core';
import {MedecinModel} from "../../Models/medecin.model";

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.scss']
})

export class AddMedecinComponent {
  professions = ['Médecin généraliste', 'Ostéopathe',
    'Kinésithérapeute'];

  model = new MedecinModel('d\'agostini', 'Lison', this.professions[0], 'lison@dagostini.com', '0612345678');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
