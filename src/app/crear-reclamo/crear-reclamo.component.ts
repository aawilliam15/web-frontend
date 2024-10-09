import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterClaim } from '../../service/register';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-reclamo',
  templateUrl: './crear-reclamo.component.html',
  styleUrls: ['./crear-reclamo.component.css'],
})
export class ClaimComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  companies: any[] = [];
  reasons: any[] = [];
  formulario: FormGroup;
  private subscription: Subscription = new Subscription();
  private token: string = localStorage.getItem('token') ?? ''; // Asignar el token de manera adecuada

  constructor(
    private fb: FormBuilder,
    private createClaim: RegisterClaim,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {
    // Inicializar el formulario con validadores
    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      empresaId: [0, Validators.required],
      motivoId: [0, Validators.required],
      descripcion: [''],
      adjunto: [''],
      estado: 0,
    });
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token') ?? '';
    this.subscription.add(
      this.route.params.subscribe(() => {
        this.cargarEmpresas();
        this.cargarMotivos();
      })
    );
  }

  cargarEmpresas(): void {
    this.loading = true;
    this.createClaim.getCompany(this.token).subscribe(
      (response: any) => {
        this.companies = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  cargarMotivos(): void {
    this.loading = true;
    this.createClaim.getMotivos(this.token).subscribe(
      (response: any) => {
        this.reasons = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Información',
      detail: 'Mensaje de prueba',
    });
  }

  registrar(): void {
    const content = {
      id: 0, // O el ID que necesites
      empresaId: this.formulario.value.empresaId,
      motivoId: this.formulario.value.motivoId,
      descripcion: this.formulario.value.descripcion,
      adjunto: this.formulario.value.adjunto,
      estado: this.formulario.value.estado,
      correo: this.formulario.value.correo,
    };
    this.loading = true;
    this.createClaim.registerForm(this.token, content).subscribe(
      (response) => {
        this.loading = false;

        this.formulario.reset();
        this.router.navigate(['/reclamos'], {
          queryParams: { __param: 'register' },
        });
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  cancelar(): void {
    this.formulario.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
