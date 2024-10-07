import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReclamosComponent } from './lista-reclamos/lista-reclamos.component';
import { ResumenComponent } from './resumen/resumen.component';
import { CrearReclamoComponent } from './crear-reclamo/crear-reclamo.component';

const routes: Routes = [
  { path: 'reclamos', component: ListaReclamosComponent },
  { path: 'crear-reclamo', component: CrearReclamoComponent },
  { path: 'resumen', component: ResumenComponent },
  { path: '', redirectTo: '/resumen', pathMatch: 'full' }, // Redirección por defecto
  { path: '**', redirectTo: '/resumen' }, // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
