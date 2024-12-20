import {Component, ElementRef, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {WindowService} from "../../../services/window.service";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public signinForm: FormGroup;
  verificationId: any;
  userLoggedIn: any;

  constructor(private formBuilder: FormBuilder,
              public authService: AuthService,
              private win: WindowService,
              private router: Router,
              private toastr: ToastrService) {
    this.signinForm = this.formBuilder.group({
      phoneNumber: ['9179616052', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
    this.userLoggedIn = this.authService.userStatus();
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

    if (localStorage.getItem('verificationId') || '') {
      this.router.navigate(['/update-profile']);
    }
    if (localStorage.getItem('fullName') || '' && localStorage.getItem('fullName') || '') {
      this.router.navigate(['/home']);
    }

    if (this.signinForm.value.phoneNumber) {
      this.authService
        .signInWithPhoneNumber(appVerifier, '+91' + this.signinForm.value.phoneNumber)
        .then((confirmationResult) => {
          localStorage.setItem(
            'verificationId',
            JSON.stringify(confirmationResult.verificationId)
          );
          localStorage.setItem(
            'phoneNumber',
            JSON.stringify(this.signinForm.value.phoneNumber)
          );
          localStorage.setItem(
            'user',
            JSON.stringify(this.signinForm.value)
          );

          localStorage.setItem(
            'uid',
            JSON.stringify(confirmationResult.uid)
          );

          this.toastr.success('OTP sent on your device!', '', {
            positionClass: 'toast-top-center',
            timeOut: 3000,
            closeButton: true
          });
          this.router.navigate(['/verify-otp']).then();
        })
    }
  }

}
