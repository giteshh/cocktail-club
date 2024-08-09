import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  userLoggedInStatus;

  constructor(public authService: AuthService, public router: Router) {
    this.userLoggedInStatus = this.authService.userStatus();
  }

  canActivate(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.userLoggedInStatus) {
      // window.alert('Access Denied, Only Logged in User Can Access This Page');
      this.router.navigate(['sigin']);
    }
    this.router.navigate(['home'])
    return true;
  }

}
