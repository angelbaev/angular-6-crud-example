import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {
  /**
   * @type {string}
   */
  @Input() public routerLink: string;

  /**
   * BackButtonComponent component constructor.
   */
  constructor() { }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }

  /**
   * Redirect back action
   */
  public redirectBack() {
    return window.history.back();
  }

}
