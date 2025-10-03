import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {UpdateProfileComponent} from "./components/update-profile/update-profile.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: "full"},
  {path: 'signin', component: LoginComponent},
  {path: 'update-profile', component: UpdateProfileComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
