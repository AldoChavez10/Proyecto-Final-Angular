import {  Routes } from '@angular/router';
import { ListarInscripcionesComponent } from './listar-inscripciones/listar-inscripciones.component';

export const routes: Routes = [
  { path: 'inscripciones', component: ListarInscripcionesComponent },
  { path: '', redirectTo: '/inscripciones', pathMatch: 'full' },
  
];


