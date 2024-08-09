import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userLoggedInStatus;

  constructor(public authService: AuthService, public router: Router) {
    this.userLoggedInStatus = this.authService.userStatus();
  }

  canActivate() {
    if (this.userLoggedInStatus === true) {
      this.router.navigate(['/home']);
      return true;
    }
    this.router.navigate(['/signin']);
    return false;
  }
}

// canActivate(
// route: ActivatedRouteSnapshot,
// state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// return true;
// route: ActivatedRouteSnapshot,
// state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     if (!this.userLoggedInStatus) {
//       this.router.navigate(['/signin']);
//       return false;
//     }
//     return true;
//   }
//
// }

// userLoggedInStatus;
// constructor(private router: Router,
//             private authService: AuthService) {
//   this.userLoggedInStatus = this.authService.userStatus();
// }
//
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return new Promise((resolve, reject) => {
//
//       if(this.userLoggedInStatus){
//         resolve(true)
//       }else{
//         resolve(false);
//         this.router.navigate(['/signin']);
//       }
//
//       // firebase.auth().onAuthStateChanged((user) => {
//       //   if (user) {
//       //     resolve(true);
//       //   } else {
//       //     this.router.navigate(['/signin']);
//       //     resolve(false);
//       //   }
//       // })
//
//     })
//   }

// }
