import { NgModule } from '@angular/core';

import { MedecinRoutingModule } from './medecin-routing.module';

import { MedecinComponent } from './medecin.component';
import {FormsModule} from "@angular/forms";
import {NzTableModule} from "ng-zorro-antd/table";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [MedecinRoutingModule, FormsModule, NzTableModule, CommonModule],
  declarations: [MedecinComponent],
  exports: [MedecinComponent]
})
export class MedecinModule { }
