import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/add-rdv' },
  { path: 'show-rdv', loadChildren: () => import('./pages/rdv/rdv.module').then(m => m.RdvModule) },
  { path: 'add-rdv', loadChildren: () => import('./pages/add-rdv/add-rdv.module').then(m => m.AddRdvModule) },
  { path: 'show-patient', loadChildren: () => import('./pages/patient/patient.module').then(m => m.PatientModule) },
  { path: 'add-patient', loadChildren: () => import('./pages/add-patient/add-patient.module').then(m => m.AddPatientModule) },
  { path: 'add-medecin', loadChildren: () => import('./pages/add-medecin/add-medecin.module').then(m => m.AddMedecinModule) },
  { path: 'show-medecin', loadChildren: () => import('./pages/medecin/medecin.module').then(m => m.MedecinModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
