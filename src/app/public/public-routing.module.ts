import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {VerifyOtpComponent} from "./verify-otp/verify-otp.component";

const routes: Routes = [
  {path: 'signin', component: LoginComponent},
  {path: 'verify-otp', component: VerifyOtpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
