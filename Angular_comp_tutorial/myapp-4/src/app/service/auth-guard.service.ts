import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | Promise<boolean> {
  //   return this.authService.isAuthemnticated().then((authenticated: boolean) => {
  //     if (authenticated) {
  //       return true;
  //     } else {
  //       this.router.navigate(['/']);
  //     }
  //   })
  // ? true
  // : this.router.navigate(['/']);
  // }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    try {
      const authenticated = await this.authService.isAuthemnticated();
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    } catch {
      this.router.navigate(['/']);
      return false;
    }
  }
  // canActivateChild(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | Promise<boolean> | Observable<boolean> {

  // return this.authService.isAuthemnticated().then((authenticated: boolean) => {
  //   if (authenticated) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/']);
  //   }
  // })

  //   return this.authService.isAuthemnticated()
  //     ? true
  //     : this.router.navigate(['/']);
  // }

  async canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    try {
      const authenticated = await this.authService.isAuthemnticated();
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    } catch {
      this.router.navigate(['/']);
      return false;
    }
  }
}
