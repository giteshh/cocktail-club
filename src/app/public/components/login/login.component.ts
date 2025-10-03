import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public signinForm: FormGroup;
  userLoggedIn: any;

  constructor(private formBuilder: FormBuilder,
              public authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
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

  async onSubmit() {
    this.markProfileFormTouched();

    if (this.signinForm.invalid) return;

    const email = this.signinForm.value.email.trim();
    const password = this.signinForm.value.password;

    try {
      // Try to sign up first
      const newUser = await this.authService.signUpWithEmailPassword(email, password);

      const profile = await this.authService.getUserProfile(newUser.uid);

      if (profile?.role === 'admin') {
        this.router.navigate(['/admin']);
      } else if (profile?.fullName && profile?.phoneNumber && profile?.address) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/update-profile']);
      }

      this.toastr.success('Account created! Please complete your profile.', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true,
      });

    } catch (error: any) {

      if (error.code === 'auth/email-already-in-use') {
        // Email exists → try login
        try {
          const user = await this.authService.signInWithEmailPassword(email, password);
          const profile = await this.authService.getUserProfile(user.uid);

          if (profile?.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (profile?.fullName && profile?.phoneNumber && profile?.address) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/update-profile']);
          }

          this.toastr.success('Welcome back!', '', {
            positionClass: 'toast-top-center',
            timeOut: 3000,
            closeButton: true,
          });

        } catch (signInError: any) {
          if (signInError.code === 'auth/wrong-password') {
            this.toastr.error('Incorrect password', 'Login Failed', {
              positionClass: 'toast-top-center',
              timeOut: 3000,
              closeButton: true,
            });
          } else {
            this.toastr.error(signInError.message || 'Login failed', 'Error', {
              positionClass: 'toast-top-center',
              timeOut: 3000,
              closeButton: true,
            });
          }
        }

      } else {
        // Any other signup errors
        this.toastr.error(error.message || 'Registration failed', 'Error', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      }

      console.error('Auth error:', error);
    }
  }

}
