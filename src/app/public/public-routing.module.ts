import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {VerifyOtpComponent} from "./components/verify-otp/verify-otp.component";
import {UpdateProfileComponent} from "./components/update-profile/update-profile.component";

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: "full"},
  {path: 'signin', component: LoginComponent},
  {path: 'verify-otp', component: VerifyOtpComponent},
  {path: 'update-profile', component: UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
