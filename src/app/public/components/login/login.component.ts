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
      // ✅ Check if email exists
      const methods = await this.authService.checkEmailExists(email);

      if (methods.length > 0) {
        // Email exists → login
        const user = await this.authService.signInWithEmailPassword(email, password);

        const profile = await this.authService.getUserProfile(user.uid);

        if (profile?.fullName && profile?.phoneNumber && profile?.address) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/update-profile']);
        }

        this.toastr.success('Welcome back!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });

      } else {
        // Email does not exist → register
        const newUser = await this.authService.signUpWithEmailPassword(email, password);

        // Optional: create Firestore doc immediately
        // await this.authService.firestore.collection('users').doc(newUser.uid).set({
        //   email: email,
        //   fullName: '',
        //   phoneNumber: '',
        //   address: '',
        // });

        this.router.navigate(['/update-profile']);
        this.toastr.success('Account created! Please complete your profile.', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      }

    } catch (error: any) {
      console.error('Auth error:', error);

      if (error.code === 'auth/wrong-password') {
        this.toastr.error('Incorrect password', 'Login Failed', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      } else {
        this.toastr.error(error.message || 'Login failed', 'Error', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      }
    }
  }


}
