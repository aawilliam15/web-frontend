import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterClaim {
  private baseUrl = '';
  constructor(private httpClient: HttpClient) {}

  registerForm(token: string): Observable<any> {
    const body = {
      user: '',
      claim: '',
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.httpClient.post<any>(`${this.baseUrl}`, body, {
      headers: headers,
      observe: 'body',
    });
  }
}
