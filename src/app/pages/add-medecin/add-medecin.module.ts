import { NgModule } from '@angular/core';

import { AddMedecinRoutingModule } from './add-medecin-routing.module';

import { AddMedecinComponent } from './add-medecin.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [AddMedecinRoutingModule, FormsModule, CommonModule],
  declarations: [AddMedecinComponent],
  exports: [AddMedecinComponent]
})
export class AddMedecinModule { }
