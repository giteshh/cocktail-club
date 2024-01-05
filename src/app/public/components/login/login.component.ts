import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signinForm = formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
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

  onSubmit() {
    this.markProfileFormTouched();
  }
}
