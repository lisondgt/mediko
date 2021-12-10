import { Component, OnInit } from '@angular/core';
import {RdvModel} from "../../Models/rdv.model";
import {RdvCommands} from "../../../Services/Commands/rdv.commands";
import { AuthService } from '@auth0/auth0-angular';
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.scss']
})

export class AddRdvComponent {

  constructor(private rdvCommands:RdvCommands, private auth:AuthService, private router:Router) {

  }

  rdv = new RdvModel('', '', '', '', '');

  submitted = false;

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      console.log(user);
      if(!user) {
        // this.router.navigate(['/login']);
      }
    })
  }

  onCreateRdv() {
    this.rdvCommands.addRdvToFireBaseDataBase(this.rdv);
    this.submitted = true;
  }

}
