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


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public signinForm: FormGroup;
  winRef: any;
  phoneNumber = '';
  verificationId: any;
  OTP: string = '';
  Code: any;
  // user: any;
  windowRef: any;
  appVerifier: any;
  recaptchaVerifier?: firebase.auth.RecaptchaVerifier;
  user: any = {user_phone: ''};
  CountryJson = environment.CountryJson;
  CountryCode: any = '+91';

  // for otp
  verificationCode: string = '';
  confirmationResult: any;

  constructor(private formBuilder: FormBuilder,
              public authService: AuthService,
              private win: WindowService,
              private router: Router,
              private ngZone: NgZone,
              private auth: AngularFireAuth,
              private el: ElementRef) {
    this.signinForm = formBuilder.group({
      phoneNumber: ['9179616052', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
    // this.winRef = windowRef;
    this.auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };


  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response: any) => {
      },
      'expired-callback': () => {
      }
    });
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
    // const recaptchaContainer = this.el.nativeElement.querySelector('#recaptcha-container');
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response: any) => {
      },
    });

    if (this.signinForm.value.phoneNumber) {
      this.authService
        .signInWithPhoneNumber(appVerifier, '+91' + this.signinForm.value.phoneNumber)
        .then((confirmationResult) => {
          localStorage.setItem(
            'verificationId',
            JSON.stringify(confirmationResult.verificationId)
          );
          this.winRef.confirmationResult = confirmationResult.verificationId;
          this.confirmationResult = confirmationResult;
          if (confirmationResult.verificationId) {
            console.log(confirmationResult.verificationId)
            this.ngZone.run(() => {
              this.router.navigate(['/verify-otp']).then();
            });
          }
        });
    }
  }

  onOtpChange(otp: string) {
    this.verificationCode = otp;
  }

  onOTPSubmit() {

    const result = this.confirmationResult.confirm(this.verificationCode)
  }
}
