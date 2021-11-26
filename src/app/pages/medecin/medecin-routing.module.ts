import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedecinComponent } from './medecin.component';

const routes: Routes = [
  { path: '', component: MedecinComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedecinRoutingModule { }
