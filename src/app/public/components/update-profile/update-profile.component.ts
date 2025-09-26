import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ToastrService} from "ngx-toastr";

interface UserProfile {
  fullName: string;
  phoneNumber: string;
  address: string;
  email?: string;
}

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  public updateProfileForm: FormGroup;
  user: any = {};

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private firestore: AngularFirestore,
              private fireAuth: AngularFireAuth,
              private toastr: ToastrService) {
    this.updateProfileForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phoneNumber: [
        '', [Validators.required, Validators.pattern('^[0-9]*$'),
          Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', Validators.required],
      email: [{value: '', disabled: true}],
    });
  }

  ngOnInit() {
    this.fireAuth.authState.subscribe(async (user) => {
      if (user) {
        this.user = user;

        try {
          // Fetch profile from Firestore
          const userDoc = await this.firestore.collection('users').doc(user.uid).ref.get();
          const profile = userDoc.data() as UserProfile;

          // Patch the form with Firestore data
          this.updateProfileForm.patchValue({
            fullName: profile?.fullName || '',
            phoneNumber: profile?.phoneNumber || user.phoneNumber || '',
            address: profile?.address || '',
            email: user.email || '',
          });
        } catch (err) {
          console.error('Error fetching user profile:', err);
        }
      }
    });
  }

  markProfileFormTouched() {
    const val = this.updateProfileForm.value;
    if (val) {
      for (const key in val) {
        if (key && val.hasOwnProperty(key)) {
          this.updateProfileForm.controls[key].markAsTouched();
        }
      }
    }
  }

  async onSubmit() {
    this.markProfileFormTouched();

    if (this.updateProfileForm.invalid || !this.user) return;

    // getRawValue() includes disabled fields
    const profileData = this.updateProfileForm.getRawValue();

    try {
      await this.firestore.collection('users').doc(this.user.uid).set(profileData, {merge: true});

      this.toastr.success('Profile updated successfully!', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true,
      });

      this.router.navigate(['/home']);
    } catch (error) {
      this.toastr.error('Error saving profile.', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true,
      });
      console.error(error);
    }
  }
}
