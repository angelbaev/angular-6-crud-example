import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../core/domains/user/user.service.ts';
import {User} from "../../../core/domains/user/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public addButton: any = {
    url: ['/users/add'],
    icon: 'add',
    text: 'Add User'
  };

  /**
   * @type {Array}
   */
  public users: User[] = [];

  /**
   * @type {any}
   */
  protected actions: any = {};

  /**
   * @param userService
   */
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.index().subscribe((results: any) => {
      this.users = results;
    });
  }

  /**
   * Get user
   *
   * @param {any} params
   * @returns {User}
   */
  public getUser(params: any): any {
    let user: User = new User(params);

    if (!this.actions[user.id]) {
      this.actions[user.id] = {
        actions: this.createActions(user)
      };
    }

    return user;
  }

  /**
   * Create actions
   *
   * @param {User} user
   * @return {any}
   */
  private createActions(user: User) {
    return [
      {
        text: 'Edit',
        icon: 'fa fa-pencil',
        cssClass: 'btn',
        url: [`/users/${user.id}/edit`],
        path: '/users/:id/edit'
      },
      {
        text: 'Preview',
        icon: 'fa fa-eye',
        cssClass: 'btn',
        url: [`/users/${user.id}/preview`],
        path: '/users/:id/preview'
      },
      {
        text: 'Delete',
        icon: 'fa fa-trash',
        cssClass: 'btn',
        callback: (userData: User) => {
          if(confirm("Are you sure to delete " + userData.email)) {
            this.userService.index().subscribe((results: any) => {
              this.users = results.filter(item => item.id != userData.id);
            });
          }
        },
        data: user
      }
    ];
  }
}
