import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamo } from './reclamo';

interface LoginResponse {
  token: string; // Ajusta esto según la estructura real de tu respuesta
}

@Injectable({
  providedIn: 'root',
})
export class ReclamoService {
  private baseUrl = '/api/v1/reclamos';
  private loginUrl = `/api/v1/login`;

  constructor(private httpClient: HttpClient) {}

  loginUser(): Observable<LoginResponse> {
    const body = {
      user: 'admin',
      pwd: 'admintest',
    };

    return this.httpClient.post<LoginResponse>(`${this.loginUrl}`, body, {
      observe: 'body',
      responseType: 'json',
    });
  }

  obtenerListaReclamo(token: string): Observable<Reclamo[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.httpClient.get<Reclamo[]>(`${this.baseUrl}`, {
      headers: headers,
      observe: 'body',
      responseType: 'json',
    });
  }
}
