import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from 'src/utilities/User';

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
  URL_For_SIGNUP =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  URL_For_LOGIN =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  API = 'AIzaSyCfNCDHvoi13na2xmFSoPam2KrJQ-cxb6M ';

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
