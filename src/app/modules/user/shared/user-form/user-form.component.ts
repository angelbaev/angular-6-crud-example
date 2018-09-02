import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../../core/services/user.service';
import { BaseFormComponent } from '../../../../shared/components/base/base-form/base-form.component';
import { User } from '../../../../core/domains/user/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends BaseFormComponent implements OnInit {
  /**
   * @type {number}
   */
  @Input() public userId: number = null;

  constructor(router: Router, formBuilder: FormBuilder, service: UserService) {
    super(router, formBuilder, service);
  }

  ngOnInit() {
    this.createForm();

    if (this.userId) {
      this.service.view(this.userId).subscribe((response: User) => {
        (<FormControl>this.form.controls['firstName']).setValue(response.firstName);
        (<FormControl>this.form.controls['lastName']).setValue(response.lastName);
        (<FormControl>this.form.controls['email']).setValue(response.email);
        (<FormControl>this.form.controls['password']).setValue(response.password);
      }, (error: any) => {
        this.handleError(error);
      });
    }
  }

  /**
   * `onSubmit` callback when the save button is clicked
   */
  public onSubmit(): void {
    if (!this.isFormValid()) {
      this.displayInputErrors();
      this.showNotificationMessage('Invalid data', 'error');

      return;
    }

    let data = {
      id: this.userId,
      firstName: this.getFormValue('firstName'),
      lastName: this.getFormValue('lastName'),
      email: this.getFormValue('email'),
      password: this.getFormValue('password'),
    };

    console.log('save data', data);
  }

  /**
   * Initializes form with all need variables
   */
  protected createForm(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * @param error
   */
  protected handleError(error: any) {
    console.log('handleError', error);
  }

}
