import { NgModule } from '@angular/core';

import { MedecinRoutingModule } from './medecin-routing.module';

import { MedecinComponent } from './medecin.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [MedecinRoutingModule, FormsModule],
  declarations: [MedecinComponent],
  exports: [MedecinComponent]
})
export class MedecinModule { }
