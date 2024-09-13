import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}
  isLoginMode = true;
  isLoading = false;
  error = new Map<string, boolean>();
  errorMessage = '';
  alert = false;
  response: AuthResponseData = {
    idToken: '',
    email: '',
    refreshToken: '',
    expiresIn: '',
    LocalId: '',
  };
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onFormSubmit(authForm: NgForm) {
    let authObs: Observable<AuthResponseData>;
    if (!authForm.valid) {
      return;
    }
    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(
        authForm?.value.email,
        authForm?.value.password
      );
      this.router.navigate(['user']);
    } else {
      authObs = this.authService.signUp(
        authForm?.value.email,
        authForm?.value.password
      );
    }
    authObs.subscribe(
      (r) => {
        this.isLoading = false;
        this.errorMessage = '';
        this.response = r;
        this.alert = true;
      },
      (e) => {
        this.isLoading = false;
        this.error.set(e.error.error.message, true);
        this.errorMessage = e.error.error.message;
        this.alert = true;
      }
    );
  }
}
