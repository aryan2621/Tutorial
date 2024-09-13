import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  loggedIn = false;
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
  isAuthemnticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    })
    // return this.loggedIn;
  }
}
