import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AdminModule} from "./admin/admin.module";
import {CustomerModule} from "./customer/customer.module";
import {PublicModule} from "./public/public.module";
import {NgOtpInputModule} from "ng-otp-input";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule,
    AdminModule,
    CustomerModule,
    RouterModule,
    AppRoutingModule,
    NgOtpInputModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
