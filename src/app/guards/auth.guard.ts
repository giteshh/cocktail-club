import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

//   constructor(public authService: AuthService, public router: Router) {
//   }
//
//   canActivate(
//     // route: ActivatedRouteSnapshot,
//     // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     // return true;
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     if (!this.authService.isLoggedIn) {
//       window.alert('Access Denied, Only Logged in User Can Access This Page');
//       this.router.navigate(['signin']);
//     }
//     return true;
//   }
//
// }
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/signin']);
          resolve(false);
        }
      })

    })
  }

}
