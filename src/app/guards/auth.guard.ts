import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {
  }

  async canActivate(): Promise<boolean> {
    const user = await this.fireAuth.currentUser;
    if (user) return true;
    this.router.navigate(['/signin']);
    return false;
  }

  async canActivateChild(): Promise<boolean> {
    return this.canActivate();
  }
}
