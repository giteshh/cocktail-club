import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async onSubmit() {
    if (this.forgotForm.invalid) return;

    const email = this.forgotForm.value.email;

    try {
      await this.afAuth.sendPasswordResetEmail(email);
      this.toastr.success('Password reset email sent!', '', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
    } catch (error: any) {
      console.error('Reset password error:', error);
      this.toastr.error(error.message || 'Failed to send reset email', '', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
    }
  }
}
