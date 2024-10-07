import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamo } from './reclamo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamoService {

  private baseUrl="http://localhost:8080/api/v1/reclamos";
  constructor(private httpClient: HttpClient) { }
  

  obtenerListaReclamo():Observable<Reclamo[]>{
    return this.httpClient.get<Reclamo[]>(`${this.baseUrl}`);
  }
}
