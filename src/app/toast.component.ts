import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'toast-basic-demo',
    templateUrl: './login-user.component.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastBasicDemo {
    constructor(private messageService: MessageService) {}
    ngOnInit() {
        this.messageService.add({
          severity: 'info',
          summary: 'Información',
          detail: 'Mensaje de prueba',
        });
      }
    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}