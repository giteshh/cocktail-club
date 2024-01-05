import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './components/login/login.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateProfileComponent } from './update-profile/update-profile.component';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    VerifyOtpComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
