import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './components/button/button.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    ActionButtonsComponent,
    BackButtonComponent
  ],
  declarations: [ButtonComponent, ActionButtonsComponent, BackButtonComponent]
})
export class SharedModule { }
