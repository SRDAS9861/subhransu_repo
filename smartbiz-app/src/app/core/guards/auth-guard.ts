import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth'; // Adjust path if needed

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getCurrentUserRole();

      if (role === 'Admin' && state.url.startsWith('/admin')) {
        return true;
      } else if (role === 'Employee' && state.url.startsWith('/employee')) {
        return true;
      } else if (role) {
        // User is logged in but accessing the wrong area → redirect to correct one
        return this.router.parseUrl(`/${role.toLowerCase()}`);
      } else {
        // Role is missing → clear session and redirect to login
        this.authService.logout();
        return this.router.parseUrl('/auth/login');
      }
    } else {
      // Not logged in → redirect to login
      return this.router.parseUrl('/auth/login');
    }
  }
}
