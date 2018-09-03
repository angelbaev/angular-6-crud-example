import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { UserService } from './domains/user/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService,
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: AuthInterceptorService,
    //  multi: true,
    //},
    UserService,
    StorageService
  ]

})
export class CoreModule { }
