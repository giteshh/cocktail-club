import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./public/components/page-not-found/page-not-found.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./guards/auth.guard";
import {DashboardGuard} from "./guards/dashboard.guard";
import {PublicComponent} from "./public/public.component";
import {CustomerComponent} from "./customer/customer.component";

const routes: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full'},
  {path: 'public', component: PublicComponent, canActivate: [AuthGuard]},
  {path: 'customer', component: CustomerComponent, canActivate: [DashboardGuard]},
  // {
  //   path: 'public', canActivate: [AuthGuard],
  //   loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  // },
  // {
  //   path: 'customer',  canActivate: [DashboardGuard],
  //   loadChildren: () => import('../app/customer/customer.module').then(m => m.CustomerModule)
  // },
  {path: 'admin', component: AdminComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
