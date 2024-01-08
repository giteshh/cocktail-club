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
  phoneNumber: any;
  verificationId: any;
  user: any;
  windowRef: any;
  appVerifier: any;

  // confirmationResult: any

  constructor(private formBuilder: FormBuilder,
              public authService: AuthService,
              private win: WindowService,
              private router: Router,
              private ngZone: NgZone,
              private auth: AngularFireAuth,
              private el: ElementRef) {
    this.signinForm = formBuilder.group({
      phoneNumber: ['+919179616052', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
    // this.winRef = windowRef;
    this.auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  ngOnInit() {
    const recaptchaContainer = this.el.nativeElement.querySelector('#recaptcha-container');
    this.appVerifier = new firebase.auth.RecaptchaVerifier(recaptchaContainer, {
      size: 'invisible',
      callback: (response: any) => {
        // This callback will be called when the user completes the reCAPTCHA.
        // You can leave it empty if you don't need any specific action.
      },
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


  onSubmit() {
    // const recaptchaContainer = this.el.nativeElement.querySelector('#recaptcha-container');
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response: any) => {
        // This callback will be called when the user completes the reCAPTCHA.
        // You can leave it empty if you don't need any specific action.
      },
    });

    console.log('app-verifier ' + appVerifier)
    firebase.auth().signInWithPhoneNumber(this.phoneNumber, appVerifier)

      .then(result => {
        console.log(result)
        console.log(this.winRef.verificationId)
        this.windowRef.confirmationResult = result;
        console.log(result + ' result')
      })
      .catch(error => console.log('error', error));
  }
}
