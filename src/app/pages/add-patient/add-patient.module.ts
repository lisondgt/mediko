import { NgModule } from '@angular/core';

import { AddPatientRoutingModule } from './add-patient-routing.module';

import { AddPatientComponent } from './add-patient.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [AddPatientRoutingModule, FormsModule],
  declarations: [AddPatientComponent],
  exports: [AddPatientComponent]
})
export class AddPatientModule { }
