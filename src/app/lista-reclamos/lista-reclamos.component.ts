import { Component, OnInit } from '@angular/core';
import { ReclamoService } from '../reclamo.service';
import { Reclamo } from '../reclamo';

@Component({
  selector: 'app-lista-reclamos',
  templateUrl: './lista-reclamos.component.html',
  styleUrls: ['./lista-reclamos.component.css']
})
export class ListaReclamosComponent implements OnInit{

  reclamos: Reclamo[];

  constructor(private reclamoservicio: ReclamoService) { }
  ngOnInit(): void {
    this.obtenerReclamos();
  }

  private obtenerReclamos() {
    this.reclamoservicio.obtenerListaReclamo().subscribe(dato => {
      this.reclamos = dato;
    })

  }
}
