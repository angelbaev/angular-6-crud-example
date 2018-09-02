import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';

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
