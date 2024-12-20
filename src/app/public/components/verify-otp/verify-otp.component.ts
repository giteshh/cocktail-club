import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  verificationCode: string = '';
  verificationId: string = '';
  user: any = {phoneNumber: '', email: '', fullName: ''};
  email;
  fullName;


  constructor(private authService: AuthService,
              private router: Router,
              private ngZone: NgZone) {
    this.email = localStorage.getItem('email') || '';
    this.fullName = localStorage.getItem('fullName') || '';

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
  }

  onOtpChange(otp: string) {
    this.verificationCode = otp;
  }

  onSubmit() {
    this.authService.enterVerificationCode(this.verificationCode).then(res => {
      this.ngZone.run(() => {
        if (this.email && this.fullName) {
          this.router.navigate(['/home']).then();
        } else {
          this.router.navigate(['/update-profile']).then();
        }
      });
    }).catch((error) => {
      // Handle errors.
    });
  }

}
