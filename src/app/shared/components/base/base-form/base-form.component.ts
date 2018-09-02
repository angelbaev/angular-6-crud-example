import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BaseService } from '../../../../core/services/base.service';

export abstract class BaseFormComponent {
  /**
   * @type {FormGroup}
   */
  public form: FormGroup;

  /**
   *
   * @param {Router} router
   * @param {FormBuilder} formBuilder
   * @param {BaseService} service
   */
  constructor(protected router: Router,
              protected formBuilder: FormBuilder,
              protected service: BaseService) { }

  /**
   * getFormValue
   *
   * @param {String} key
   * @returns {number|null}
   */
  public getFormValue(key: string): any {
    if (typeof this.form.value[key] === 'undefined' || this.form.value[key] === null) {
      return null;
    }

    if (Object.keys(this.form.value[key]).length === 0) {
      return <number>this.form.value[key];
    }

    if (this.form.value[key].hasOwnProperty('id')) {
      return <number>this.form.value[key].id;
    }

    return this.form.value[key];
  }

  /**
   * Redirect back action
   */
  public redirectBack() {
    return window.history.back();
  }

  /**
   * Save data form
   *
   * @param {Object} data
   * @param {Function} callback
   * @param {Function} errorCallback
   */
  public saveData(data: any, callback: Function, errorCallback?: Function): void {
    this.service.save(data).subscribe((response: any) => {
          this.showNotificationMessage('successful Saved', 'success');
          if (callback) {
            callback(response);
          }
        }, (error: any) => {
          if (errorCallback) {
            errorCallback(error);
          } else {
            this.handleError(error);
          }
        }
    );
  }

  protected abstract createForm(): void;

  /**
   * Handle errors
   *
   * @param {any} error
   */
  protected abstract handleError(error: any): void;

  /**
   * Check if form is valid
   *
   * @returns {boolean}
   */
  protected isFormValid() {
    return this.form.valid;
  }

  /**
   * Display input errors by given controls
   *
   * @param {any} controls
   */
  protected displayInputErrors(controls: any = this.form.controls) {
    for (let indexForm in controls) {
      if (controls.hasOwnProperty(indexForm)) {
        let control: any = controls[indexForm];
        console.log(control);
      }
    }
  }

  /**
   * Show notification message
   *
   * @param {string} text
   * @param {string} type
   */
  protected showNotificationMessage(text: string, type: string) {
    console.log(text, type);
  }

}
