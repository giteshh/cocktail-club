import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import {RouterModule} from "@angular/router";
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminOrdersComponent} from './components/admin-orders/admin-orders.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {CustomersListComponent} from './components/customers-list/customers-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    NavbarComponent,
    AdminOrdersComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule {
}
