import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./public/components/page-not-found/page-not-found.component";
import {CustomerComponent} from "./customer/customer.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./guards/auth.guard";
import {PublicComponent} from "./public/public.component";
import {AdminDashboardComponent} from "./admin/components/admin-dashboard/admin-dashboard.component";
import {AdminGuard} from "./guards/admin.guard";

const routes: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full'},
  {path: 'public', component: PublicComponent, canActivate: [AuthGuard]},
  {path: 'customer', component: CustomerComponent, canActivate: [AuthGuard]},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: AdminDashboardComponent},
    ],
    canActivate: [AdminGuard]
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
