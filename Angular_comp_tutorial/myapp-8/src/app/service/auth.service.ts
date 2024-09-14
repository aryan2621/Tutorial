import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from 'src/utilities/User';
import {enviroment} from 'src/enviroment/enviroment.ts'

export interface AuthResponseData {
  LocalId: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  idToken: string;
  registered?: boolean;
  displayName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL_For_SIGNUP = enviroment.URL_For_SIGNUP;
  URL_For_LOGIN = enviroment.URL_For_LOGIN;
  API = enviroment.API;

  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    let URL = this.URL_For_SIGNUP + this.API;
    return this.http
      .post<AuthResponseData>(URL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((resData) => {
          this.handleUser(resData);
        })
      );
  }
  login(email: string, password: string) {
    let URL = this.URL_For_LOGIN + this.API;
    return this.http.post<AuthResponseData>(URL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
  private handleUser(resData: AuthResponseData) {
    const user = new User(
      resData.email,
      resData.LocalId,
      resData.idToken,
      new Date(new Date().getTime() + +resData.expiresIn * 1000)
    );
  }
}
