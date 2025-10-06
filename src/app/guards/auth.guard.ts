import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {firstValueFrom} from "rxjs";

interface AppStatus {
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
  }

  async canActivate(): Promise<boolean> {
    const user = await new Promise<any>((resolve) => {
      this.fireAuth.authState.subscribe(u => resolve(u));
    });

    if (!user) {
      this.router.navigate(['/signin']);
      return false;
    }

    // check app status
    const statusDoc = await this.firestore.doc('appStatus/status').ref.get();
    const statusData = statusDoc.data() as AppStatus;

    if (!statusData?.isOpen) {
      this.router.navigate(['/closed']);
      return false;
    }

    return true;
  }


  async canActivateChild(): Promise<boolean> {
    return this.canActivate();
  }
}
