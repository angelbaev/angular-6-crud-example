import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  /**
   * @type {number}
   */
  public userId: number;

  /***
   * UserEditComponent component constructor.
   * @param {ActivatedRoute} activatedRoute
   */
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = + params['id'];
    });
  }

}
