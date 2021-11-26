import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMedecinComponent } from './add-medecin.component';

const routes: Routes = [
  { path: '', component: AddMedecinComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMedecinRoutingModule { }
