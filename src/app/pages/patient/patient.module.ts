import { NgModule } from '@angular/core';

import { PatientRoutingModule } from './patient-routing.module';

import { PatientComponent } from './patient.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [PatientRoutingModule, FormsModule],
  declarations: [PatientComponent],
  exports: [PatientComponent]
})
export class PatientModule { }
