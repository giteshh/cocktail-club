import {Component, Input, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import {WindowService} from "../../../services/window.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {logEvent} from "@angular/fire/analytics";

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  // otp: string = '';
  verify: any;
  windowRef: any;
  verificationCode: string = '';
  verificationId: string = '';
  user: any = {phoneNumber: ''};
  @Input() phoneNumber = ''
  @Input() confirmResult = ''
  confirmationResult = '';
  cred: any;

  constructor(private authService: AuthService,
              private router: Router,
              private ngZone: NgZone,
              private win: WindowService,
              private auth: AngularFireAuth) {
    this.verify = (localStorage.getItem('verificationId') || '{}');
    this.cred = firebase.auth.PhoneAuthProvider.credential(
      this.verificationId,
      this.verificationCode //otp
    );
    console.log('this.cred ' + this.verify)
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
    this.windowRef = this.win.windowRef;
    this.verify = (localStorage.getItem('verificationId') || '{}');
    // console.log(this.verify)

  }

  onOtpChange(otp: string) {
    this.verificationCode = otp;
  }

  onSubmit() {


    const credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.verificationCode
    );
    // console.log('credential ' + (this.cred))

    // this.authService.enterVerificationCode(this.verify).then(r => {
    //   console.log(r.user)
    // })

    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then((result: { user: any; }) => {
        this.user = result.user;
        console.log(result);
      })
      .catch((error: any) => console.log(error, 'Incorrect code entered?'));
    // firebase.auth().signInWithCredential(credential)
    //   .then((userCredential) => {
    //     // User signed in successfully.
    //     console.log(userCredential)
    //     console.log('Authentication successful', userCredential.user);
    //   })
    //   .catch((error) => {
    //     // Handle errors.
    //     console.error('Authentication failed', error);
    //   });
  }

}
