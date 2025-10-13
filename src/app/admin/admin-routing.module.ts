import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import {AdminGuard} from "../guards/admin.guard";
import {CustomersListComponent} from "./components/customers-list/customers-list.component";
import {DataUploadToFirebaseComponent} from "./components/data-upload-to-firebase/data-upload-to-firebase.component";


const routes: Routes = [
  {path: 'dashboard', component: AdminDashboardComponent},
  {path: 'admin-orders', component: AdminOrdersComponent, canActivate: [AdminGuard]},
  {path: 'customers-list', component: CustomersListComponent, canActivate: [AdminGuard]},
  {path: 'product-data-upload', component: DataUploadToFirebaseComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
