import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {Router} from "@angular/router";
import {getAuth, signOut} from "@angular/fire/auth";


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
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.removeItem('user');
      // localStorage.removeItem('verificationId');
      this.router.navigate(['/home']);
      // localStorage.clear();
      this.userStatus();
    });
  }

  userStatus() {
    const user = JSON.parse(localStorage.getItem('verificationId') || '{}');
    if (user) {
      return this.userLogInStatus = true;
    }
    return this.userLogInStatus = false;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('verificationId') || '{}');
    return user !== null;
  }
}

