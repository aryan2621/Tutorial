import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp-4';
  constructor(private authService: AuthService, private router: Router) {}
  login() {
    this.authService.login();
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
