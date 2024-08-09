import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  confirmationResult?: firebase.auth.ConfirmationResult;
  userLogInStatus: any;

  constructor(private fireAuth: AngularFireAuth,
              private router: Router) {
  }

  signInWithPhoneNumber(recaptchaVerifier: any, phoneNumber: any) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth
        .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
        .then((confirmationResult) => {
          this.confirmationResult = confirmationResult;
          resolve(confirmationResult);
        })
        .catch((error) => {
          reject('SMS not sent');
        });
    });
  }

  enterVerificationCode(code: string) {
    return new Promise<any>((resolve, reject) => {
      this.confirmationResult
        ?.confirm(code)
        .then(async (result) => {
          const user = result.user;
          resolve(user);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  }

  doSignOut() {
    localStorage.removeItem('verificationId');
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
    this.userLogInStatus = false;
    // localStorage.clear();
    // this.userStatus();
  }

  userStatus() {
    const user = (localStorage.getItem('verificationId') || '');
    if (user) {
      this.router.navigate(['/home']);
      return this.userLogInStatus = true;
    } else {
      this.router.navigate(['/signin']);
      return this.userLogInStatus = false;
    }
  }
}

