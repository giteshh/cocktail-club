import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {VerifyOtpComponent} from "./components/verify-otp/verify-otp.component";
import {UpdateProfileComponent} from "./components/update-profile/update-profile.component";
import {SplashScreenComponent} from "./components/splash-screen/splash-screen.component";
import {PublicComponent} from "./public.component";

const routes: Routes = [
  {
    path: '',
    component: PublicComponent, children: [
      {path: '', redirectTo: 'signin', pathMatch: "full"},
      {path: 'signin', component: LoginComponent},
      {path: 'verify-otp', component: VerifyOtpComponent},
      {path: 'update-profile', component: UpdateProfileComponent},
      {path: 'splash', component: SplashScreenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
