import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  confirmationResult?: firebase.auth.ConfirmationResult;

  constructor(private fireAuth: AngularFireAuth) {
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

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') as string);
    console.log(user);
    return user !== null;
  }
}

