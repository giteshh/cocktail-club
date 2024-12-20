import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './components/login/login.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import {NgOtpInputModule} from "ng-otp-input";


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    VerifyOtpComponent,
    UpdateProfileComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule,
    NgOtpInputModule
  ]
})
export class PublicModule { }
