import { NgModule } from '@angular/core';

import { AddPatientRoutingModule } from './add-patient-routing.module';

import { AddPatientComponent } from './add-patient.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [AddPatientRoutingModule, FormsModule, CommonModule],
  declarations: [AddPatientComponent],
  exports: [AddPatientComponent]
})
export class AddPatientModule { }
