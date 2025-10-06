import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AppOpenGuard implements CanActivate {
  constructor(private firestore: AngularFirestore, private router: Router) {
  }

  async canActivate(): Promise<boolean> {
    const statusDoc = await this.firestore.doc('appStatus/status').ref.get();
    const statusData = statusDoc.data() as { isOpen: boolean };

    if (statusData?.isOpen === false) {
      this.router.navigate(['/closed']);
      return false;
    }

    return true;
  }
}

