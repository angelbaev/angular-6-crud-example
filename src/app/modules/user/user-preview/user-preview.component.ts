import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/domains/user/user.model';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {
  /**
   * @type {User} user
   */
  protected user: User;

  /***
   * @param {UserService} userService
   * @param {Router} router
   * @param {ActivatedRoute} activatedRoute
   */
  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.view(id).subscribe((result: any) => {
      this.user = result;
    });
  }

}
