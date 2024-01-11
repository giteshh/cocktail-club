import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.updateProfileForm = formBuilder.group({
      fullName: [this.user.fullName, Validators.required],
      phoneNumber: [{value: this.user.phoneNumber, disabled: true}, Validators.required],
      email: [this.user.email, Validators.required],
    })
    console.log(this.userCart)
    console.log(this.user)
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

  onSubmit() {
    this.markProfileFormTouched();
    localStorage.setItem(
      'user',
      JSON.stringify(this.updateProfileForm.value)
    );
    this.router.navigate(['/checkout'])
  }
}
