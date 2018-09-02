import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BaseFormComponent } from '../../../shared/components/base/base-form/base-form.component';
import { AuthService } from '../../../core/services/auth.service';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

  /**
   * @type {boolean}
   */
  invalidLogin: boolean = false;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {AuthService} service
   */
  constructor(protected router: Router,
              formBuilder: FormBuilder, 
              protected service: AuthService,
              private storageService: StorageService) {
    super(router, formBuilder, service)
  }

  ngOnInit() {
    this.createForm();
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

    this.service.login(
        this.form.controls.email.value,
        this.form.controls.password.value
    ).subscribe((result: any) => {
      if (result !== null) {
        this.invalidLogin = false;
        this.storageService.set('loggedIn', JSON.stringify('true'));
        this.storageService.set('logged', JSON.stringify(result));
        this.router.navigate(['users']);
      } else {
        this.invalidLogin = true;
      }
});
  }

  /**
   * Initializes form with all need variables
   */
  protected createForm(): void {
    this.form = this.formBuilder.group({
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
