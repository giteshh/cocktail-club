import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {PublicComponent} from './public.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdateProfileComponent} from './components/update-profile/update-profile.component';
import {NgOtpInputModule} from "ng-otp-input";
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {ClosedComponent} from './components/closed/closed.component';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    UpdateProfileComponent,
    ForgotPasswordComponent,
    ClosedComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule,
    NgOtpInputModule
  ]
})
export class PublicModule {
}
