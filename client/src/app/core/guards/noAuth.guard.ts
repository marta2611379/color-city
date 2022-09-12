import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (localStorage.getItem('access-token') === null || undefined || '') {
      return true;
    } else {
      this.router.navigate(['/super-administrator']);
      return false;
    }
  }
}
