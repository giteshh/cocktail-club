import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AdminModule} from "./admin/admin.module";
import {CustomerModule} from "./customer/customer.module";
import {PublicModule} from "./public/public.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    AdminModule,
    CustomerModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
