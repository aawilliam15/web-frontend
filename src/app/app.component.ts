import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-reclamo-frontend';
  showSidebar: boolean = true;

  constructor(private router: Router) {
    // Escuchar cambios en la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Aquí defines las rutas donde quieres ocultar el sidebar
        this.showSidebar = !['/login-user'].includes(event.url);
      }
    });

  }

  logOut() {
    localStorage.setItem('token', '');
    this.router.navigate(['/login-user'])
  }
}
