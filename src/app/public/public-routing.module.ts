import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {VerifyOtpComponent} from "./components/verify-otp/verify-otp.component";
import {UpdateProfileComponent} from "./components/update-profile/update-profile.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {path: 'signin', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'verify-otp', component: VerifyOtpComponent, canActivate: [AuthGuard]},
  {path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
