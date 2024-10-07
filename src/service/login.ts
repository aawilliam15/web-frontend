import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Login {
  private baseUrl: string = '';
  private loading: boolean = false;
  constructor(private httpClient: HttpClient) {}

  loginUser(): Observable<any> {
    const body = {
      user: 'admin',
      pwd: 'admintest',
    };
    return this.httpClient.post(`${this.baseUrl}`, body, {
      observe: 'body',
    });
  }
}
