import { NgModule } from '@angular/core';

import { PatientRoutingModule } from './patient-routing.module';

import { PatientComponent } from './patient.component';
import {FormsModule} from "@angular/forms";
import {NzTableModule} from "ng-zorro-antd/table";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [PatientRoutingModule, FormsModule, NzTableModule, CommonModule],
  declarations: [PatientComponent],
  exports: [PatientComponent]
})
export class PatientModule { }
