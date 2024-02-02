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
  user = JSON.parse(localStorage.getItem('user') || '{}');
  phoneNumber = JSON.parse(localStorage.getItem('phoneNumber') || '{}');
  userCart = JSON.parse(localStorage.getItem('cart') || '{}');
  userData: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.updateProfileForm = formBuilder.group({
      fullName: [this.user.fullName, Validators.required],
      phoneNumber: [{value: this.user.phoneNumber, disabled: true}, Validators.required],
      email: [this.user.email, Validators.required],
    })
    console.log(this.userCart)
    console.log(this.user)
    console.log('confirmation uidgg  '+ (localStorage.getItem('uid') || '{}'))
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

  onSubmit(updateProfileForm:any) {
    this.markProfileFormTouched();
    localStorage.setItem(
      'user',
      JSON.stringify(this.updateProfileForm.value)
    );
    firebase.firestore().collection("users").doc(updateProfileForm.uid).update({
      fullName: this.updateProfileForm.value.fullName,
      email: this.updateProfileForm.value.email,
      photoURL: "",
      orders: "",
      verificationId: "",
      paymentId: "",
      role: 2,
      address: "",
      state: "",
      zipCode: "",
    }).then(() => {
      // ToDO add toaster msg
      this.router.navigate(['/checkout']);
    })

  }
}
