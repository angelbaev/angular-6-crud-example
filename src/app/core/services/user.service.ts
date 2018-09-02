import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../domains/user/user.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  /**
   * @type {string}
   */
  public baseUrl: string = 'http://localhost:8080/user-portal/users';

  /**
   * @type {User[]}
   */
  private users: User[] =  [
    {id: 1, firstName: 'Angel', lastName: 'Baev', email: 'angel@gmail.com', password: 'password'},
    {id: 2, firstName: 'Tom', lastName: 'Jac', email: 'tom@gmail.com', password: 'password'},
    {id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com', password: 'password'},
    {id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com', password: 'password'},
  ];

  /**
   * @param {HttpClient} http
   */
  constructor( http: HttpClient) {
    super(http);
  }

  /**
   * @returns {any}
   */
  public index(): Observable<User[]> {
    return of(this.users);
  }

  public view(id: number) : Observable<User> {
    let user  = this.users.find(item => (item.id == id));

    return of(user || null);
  }

  public login(username: string, password: string): Observable<User> {
    let user  = this.users.find(item => (item.email == username && item.password == password));

    return of(user || null);
  }
}
