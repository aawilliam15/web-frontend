import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaReclamosComponent } from './lista-reclamos/lista-reclamos.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumenComponent } from './resumen/resumen.component';
import { CrearReclamoComponent } from './crear-reclamo/crear-reclamo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaReclamosComponent,
    ResumenComponent,
    CrearReclamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
