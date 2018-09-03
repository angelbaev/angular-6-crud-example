import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from './base.service';
import { StorageService } from './storage.service';
import { UserService } from './../domains/user/user.service.ts';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  /**
   * @type {boolean}
     */
  private loggedInStatus: boolean = <boolean>JSON.parse(this.storageService.get('loggedIn') || 'false');

  /**
   *
   * @param {HttpClient} http
   * @param {StorageService} storageService
   * @param {UserService} userService
   */
  constructor(http: HttpClient,
              private storageService: StorageService,
              private userService: UserService) {
    super(http);
  }

  /**
   *
   * @param {string} username
   * @param {string} password
     */
  public login(username: string, password: string) {
    return this.userService.login(username, password);
  }

  public logout(): void {
    this.storageService.remove('loggedIn');
    this.storageService.remove('logged');
    this.loggedInStatus = false;
  }

  /**
   * @returns {boolean}
   */
  public isLogged() {
    return (JSON.parse(this.storageService.get('loggedIn')) || this.loggedInStatus.toString()) == 'true';
  }
}
