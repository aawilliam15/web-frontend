import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-toast',
  template: `<p-toast></p-toast>`, // Contenedor para los toasts
  standalone: true,
  imports: [ToastModule, ButtonModule, RippleModule],
  providers: [MessageService]
})
export class ToastComponent {}
    