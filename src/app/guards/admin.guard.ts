import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService,
              private fireAuth: AngularFireAuth,
              private router: Router) {
  }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.authService.fireAuth.authState.subscribe(async (user) => {
        if (!user) {
          this.router.navigate(['/signin']);
          resolve(false);
          return;
        }

        try {
          const profile = await this.authService.getUserProfile(user.uid);

          if (profile?.role === 'admin') {
            resolve(true);
          } else {
            this.router.navigate(['/']);
            resolve(false);
          }
        } catch (error) {
          console.error('Error fetching user profile in guard:', error);
          this.router.navigate(['/signin']);
          resolve(false);
        }
      });
    });
  }
}
