import { NgModule } from '@angular/core';

import { AddRdvRoutingModule } from './add-rdv-routing.module';

import { AddRdvComponent } from './add-rdv.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [AddRdvRoutingModule, FormsModule],
  declarations: [AddRdvComponent],
  exports: [AddRdvComponent]
})
export class AddRdvModule { }
