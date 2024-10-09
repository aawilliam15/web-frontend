import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Login } from '../../service/login';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

interface LoginResponse {
  token: string; // Ajusta esto según la estructura real de tu respuesta
}

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css',
  providers: [MessageService],
})
export class LoginUserComponent {
  loading: boolean = false;
  username: string = '';
  password: string = '';
  constructor(
    private loginService: Login,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  private loginUser(user: String, pwd: String) {
    this.loading = true;
    this.loginService.loginUser({ user, pwd }).subscribe(
      (response: LoginResponse) => {
        this.loading = false;
        localStorage.setItem('token', response.token);
        this.router.navigate(['/reclamos']);
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  onSubmit() {
    const user = this.username;
    const pwd = this.password;
    this.loginUser(user, pwd);
  }

  logOut() {
    localStorage.setItem('token', '');
    this.router.navigate(['/login-user']);
  }
}
