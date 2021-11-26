import { NgModule } from '@angular/core';

import { AddMedecinRoutingModule } from './add-medecin-routing.module';

import { AddMedecinComponent } from './add-medecin.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [AddMedecinRoutingModule, FormsModule],
  declarations: [AddMedecinComponent],
  exports: [AddMedecinComponent]
})
export class AddMedecinModule { }
