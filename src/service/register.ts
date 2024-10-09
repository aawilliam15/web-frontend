import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface FormData {
  id: Number;
  empresaId: Number;
  motivoId: Number;
  descripcion: String;
  adjunto: String;
  estado: String;
  correo: String;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterClaim {
  private motivosUrl = '/api/v1/motivos';
  private companyUrl = '/api/v1/empresa';
  private registerUrl = '/api/v1/registro';
  constructor(private httpClient: HttpClient) {}

  getMotivos(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.get<any>(`${this.motivosUrl}`, {
      headers: headers,
      observe: 'body',
    });
  }

  getCompany(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.get<any>(`${this.companyUrl}`, {
      headers: headers,
      observe: 'body',
    });
  }

  registerForm(token: string, content: FormData): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.post<any>(`${this.registerUrl}`, content, {
      headers: headers,
      observe: 'body',
    });
  }
}
