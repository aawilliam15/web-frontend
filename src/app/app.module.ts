import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaReclamosComponent } from './lista-reclamos/lista-reclamos.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ResumenComponent } from './resumen/resumen.component';
import { ClaimComponent } from './crear-reclamo/crear-reclamo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUserComponent } from './login-user/login-user.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastComponent } from '../shared/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaReclamosComponent,
    ResumenComponent,
    ClaimComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    ToastComponent,
    ButtonModule,
    AppRoutingModule,
    MessageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule // Agregar ReactiveFormsModule aquí
  ],
  providers: [

    MessageService,
    provideClientHydration(),
    provideHttpClient(withFetch())   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
