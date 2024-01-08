import {Component, Input, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import {WindowService} from "../../../services/window.service";

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  otp!: string;
  verify: any;
  windowRef: any;
  verificationCode: string | undefined;
  user: any = {phoneNumber: ''};
  @Input() phoneNumber = ''
  confirmationResult?: firebase.auth.ConfirmationResult

  constructor(private authService: AuthService,
              private router: Router,
              private ngZone: NgZone,
              private win: WindowService) {
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
    this.windowRef = this.win.windowRef
    this.verify = JSON.parse(localStorage.getItem('VerificationCode') || '{}');
    console.log(this.verify)
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }

  onSubmit() {
    console.log(this.otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        localStorage.setItem('user_data', JSON.stringify(response));
        this.confirmationResult?.confirm(this.verify).then();
        this.ngZone.run(() => {
          this.router.navigate(['/update-profile']);
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }

}
