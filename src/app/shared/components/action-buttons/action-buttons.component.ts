import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent implements OnInit {
  /**
   * @type {Array}
   */
  @Input() public actions: any[] = [];

  /**
   * @type {string}
   */
  public cssClass = 'btn';

  /**
   * Constructor
   */
  constructor() { }

  ngOnInit() {
    let actions: any[] = [];

    this.actions.forEach((action: any) => {
      let permissions: string;
      if (action.url && action.path) {
        permissions = action.path;
      } else if (action.url) {
        permissions = action.url[0];
      } else {
        permissions = action.permissions;
      }

      if (!action.cssClass) {
        action.cssClass = this.cssClass;
      }

      // TODO: push only if user has permissions for selected action
      actions.push(action);
    });

    this.actions = actions;
  }

}
