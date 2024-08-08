import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  public updateProfileForm: FormGroup;
  user: any = {};
  phoneNumber;
  // verificationId;
  fullName;
  email;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.phoneNumber = JSON.parse(localStorage.getItem('phoneNumber') || '');
    // this.verificationId = JSON.parse(localStorage.getItem('verificationId') || '{}');
    this.fullName = JSON.parse(localStorage.getItem('fullName') || '');
    this.email = JSON.parse(localStorage.getItem('email') || '');
    this.user = JSON.parse(localStorage.getItem('user') || '');

    this.updateProfileForm = formBuilder.group({
      fullName: [this.fullName, Validators.required],
      phoneNumber: [{value: this.phoneNumber, disabled: true}, Validators.required],
      email: [this.email, Validators.required],
    })
  }

  ngOnInit() {
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


  onSubmit(updateProfileForm: any) {
    this.markProfileFormTouched();
    let email: string = updateProfileForm.value.email;
    let fullName: string = updateProfileForm.value.fullName;

    localStorage.setItem(
      'user',
      JSON.stringify(this.updateProfileForm.value.fullName)
    );
    localStorage.setItem(
      'user',
      JSON.stringify(this.updateProfileForm.value.email)
    );
    this.router.navigate(['/home']);
  }
}
