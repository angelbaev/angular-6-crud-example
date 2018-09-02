import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService) {}

  /**
   *
   * @param next
   * @param state
   * @returns {boolean}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let isLogged: boolean = this.authService.isLogged();

    if (!isLogged) {
      this.router.navigate(['login']);
      return false;
    }

    return isLogged;
  }

  /**
   * On child route activated
   *
   * @returns {boolean}
   */
  public canActivateChild(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state);
  }
}
