import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {UpdateProfileComponent} from "./components/update-profile/update-profile.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {AppOpenGuard} from "../guards/app-open.guard";

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: "full"},
  {path: 'signin', component: LoginComponent, canActivate: [AppOpenGuard]},
  {path: 'update-profile', component: UpdateProfileComponent, canActivate: [AppOpenGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AppOpenGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
