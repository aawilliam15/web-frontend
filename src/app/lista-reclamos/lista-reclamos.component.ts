import { Component, OnInit } from '@angular/core';
import { ReclamoService } from '../reclamo.service';
import { Reclamo } from '../reclamo';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
interface LoginResponse {
  token: string; // Ajusta esto según la estructura real de tu respuesta
}

@Component({
  selector: 'app-lista-reclamos',
  templateUrl: './lista-reclamos.component.html',
  styleUrls: ['./lista-reclamos.component.css'],

})
export class ListaReclamosComponent implements OnInit{
  loading : boolean = false 
  reclamos: Reclamo[];
  private subscription: Subscription = new Subscription();
  private token : string
  constructor(private reclamoservicio: ReclamoService, private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.loginUser()
    this.subscription.add(this.route.params.subscribe(() => {
      this.obtenerReclamos();
    }));
    // this.obtenerReclamos();
    // debugger
    // this.subscription.add(this.route.params.subscribe(() => {
    //   this.obtenerReclamos();
    // }));

  }


  private loginUser() {
    this.loading = true;
    this.reclamoservicio.loginUser().subscribe(
      (response: LoginResponse) => {
        this.token = response.token; // Accede al token
        this.loading = false;
        this.obtenerReclamos(); // Llamar a obtenerReclamos después de iniciar sesión
      },
      error => {
        console.error('Error al iniciar sesión:', error);
        this.loading = false;
      }
    );
  }

  private obtenerReclamos() {
    if (!this.token) return; // Asegurarse de que el token está disponible

    this.loading = true;

    this.reclamoservicio.obtenerListaReclamo(this.token).subscribe(
      dato => {
        this.reclamos = dato;
        this.loading = false;
      },
      error => {
        console.error('Error al obtener reclamos:', error);
        this.loading = false;
      }
    );
  }

  seeMore (id:Number) {
    debugger
    console.log('Reclamo ID',id)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Limpiar la suscripción
  }


}
