import {Component, ElementRef, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {WindowService} from "../../../services/window.service";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {getAuth, signInWithPhoneNumber} from "@angular/fire/auth";
import auth = firebase.auth;
import {environment} from "../../../../environments/environment";
import {doc} from "@angular/fire/firestore";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public signinForm: FormGroup;
  winRef: any;
  // phoneNumber = '';
  verificationId: any;
  OTP: string = '';
  Code: any;
  windowRef: any;
  appVerifier: any;
  recaptchaVerifier?: firebase.auth.RecaptchaVerifier;
  CountryJson = environment.CountryJson;
  CountryCode: any = '+91';
  user = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private formBuilder: FormBuilder,
              public authService: AuthService,
              private win: WindowService,
              private router: Router) {
    this.signinForm = formBuilder.group({
      phoneNumber: ['9179616052', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }

  ngOnInit() {
  }

  markProfileFormTouched() {
    const val = this.signinForm.value;
    if (val) {
      for (const key in val) {
        if (key && val.hasOwnProperty(key)) {
          this.signinForm.controls[key].markAsTouched();
        }
      }
    }
  }


  onSubmit($event: any) {
    this.markProfileFormTouched();
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response: any) => {
      },
    });

    if (this.signinForm.value.phoneNumber) {
      localStorage.setItem(
        'user',
        JSON.stringify(this.signinForm.value)
      );
      this.authService
        .signInWithPhoneNumber(appVerifier, '+91' + this.signinForm.value.phoneNumber)
        .then((confirmationResult) => {
          console.log(confirmationResult)
          localStorage.setItem(
            'verificationId',
            JSON.stringify(confirmationResult.verificationId)
          );
          // localStorage.setItem(
          //   'phoneNumber',
          //   JSON.stringify(this.signinForm.value.phoneNumber)
          // );
          firebase.firestore().collection("users").doc(confirmationResult.uid).set({
            phoneNumber: this.signinForm.value.phoneNumber,
            fullName: "",
            email: "",
            photoURL: "",
            orders: "",
            verificationId: "",
            paymentId: "",
            role: 2,
            address: "",
            state: "",
            zipCode: "",
          }).then(() => {
            localStorage.setItem(
              'uid',
              JSON.stringify(confirmationResult.uid)
            );
            console.log('confirmation uid  '+ confirmationResult.uid)


            // ToDO add toaster msg
            this.router.navigate(['/verify-otp']).then();
          })

        });
    }
  }

}
