import { NgModule } from '@angular/core';

import { RdvRoutingModule } from './rdv-routing.module';

import { RdvComponent } from './rdv.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [RdvRoutingModule, FormsModule],
  declarations: [RdvComponent],
  exports: [RdvComponent]
})
export class RdvModule { }
