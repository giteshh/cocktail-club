import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  sendVerificationCode(phoneNumber: string) {
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    return this.afAuth.signInWithPhoneNumber(phoneNumber, appVerifier);
  }

  verifyCode(verificationId: string, code: string) {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
    return this.afAuth.signInWithCredential(credential);
  }
}

