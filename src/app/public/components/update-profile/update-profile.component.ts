import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

  public updateProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.updateProfileForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
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
  }
}
