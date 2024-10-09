import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface FormData {
  user: String;
  pwd: String;
}

@Injectable({
  providedIn: 'root',
})
export class Login {
  private baseUrl: string = '/api/v1/login';

  constructor(private httpClient: HttpClient) {}

  loginUser(body: FormData): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, body, {
      observe: 'body',
    });
  }
}
