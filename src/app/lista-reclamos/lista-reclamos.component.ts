import { Component, OnInit } from '@angular/core';
import { ReclamoService } from '../reclamo.service';
import { Reclamo } from '../reclamo';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-reclamos',
  templateUrl: './lista-reclamos.component.html',
  styleUrls: ['./lista-reclamos.component.css'],
  providers: [MessageService],
})
export class ListaReclamosComponent implements OnInit {
  loading: boolean = false;
  reclamos: Reclamo[] = [];
  private subscription: Subscription = new Subscription();

  private token: string | null =
    typeof localStorage !== 'undefined' &&
    typeof localStorage.getItem('token') === 'string'
      ? localStorage?.getItem('token')
      : '';

  constructor(
    private router: Router,

    private reclamoservicio: ReclamoService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.route.queryParams.subscribe((params) => {
        if (params['__param']) {
          setTimeout(() => {
            this.showToast();
          }, 100);
        }
        this.obtenerReclamos();
      })
    );
  }

  showToast() {
    this.messageService.add({
      severity: 'success',
      detail: 'Reclamo Registrado',
    });
  }

  private obtenerReclamos() {
    if (!this.token) return;
    this.loading = true;
    this.reclamoservicio.obtenerListaReclamo(this.token).subscribe(
      (dato) => {
        this.reclamos = dato;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  ngOnDestroy(): void {
    const url = this.router.url.split('?')[0]; // Obtener la ruta actual sin parámetros de consulta
    this.location.replaceState(url);
    this.subscription.unsubscribe();
  }
}
