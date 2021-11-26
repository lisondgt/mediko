import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRdvComponent } from './add-rdv.component';

const routes: Routes = [
  { path: '', component: AddRdvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRdvRoutingModule { }
