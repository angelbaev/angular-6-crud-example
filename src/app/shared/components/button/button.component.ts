import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  /**
   * @type {any}
   */
  @Input() public button: any = {};

  /**
   * @type {string}
   */
  @Input() public icon: string;

  /**
   * @type {string}
   */
  @Input() public cssClass = 'btn';

  constructor() { }

  ngOnInit() {
  }

}
