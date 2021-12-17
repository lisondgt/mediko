import { NgModule } from '@angular/core';

import { RdvRoutingModule } from './rdv-routing.module';

import { RdvComponent } from './rdv.component';
import {FormsModule} from "@angular/forms";
import {NzTableModule} from "ng-zorro-antd/table";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [RdvRoutingModule, FormsModule, NzTableModule, CommonModule],
  declarations: [RdvComponent],
  exports: [RdvComponent]
})
export class RdvModule { }
