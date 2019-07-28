import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated() // fake auth
      .then((authenticated: boolean) => {
        if (authenticated) {
          // go to target route if authenticated
          return true;
        } else {
          // go to default route if not authenticated
          this.router.navigate(['/']);
        }
      });
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated() // fake auth
      .then((authenticated: boolean) => {
        if (authenticated) {
          // go to target route if authenticated
          return true;
        } else {
          // go to default route if not authenticated
          this.router.navigate(['/']);
        }
      });
  }
}
