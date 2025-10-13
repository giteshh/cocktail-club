import {Component} from '@angular/core';
import {ProductUploadService} from "../../../services/product-upload.service";

@Component({
  selector: 'app-data-upload-to-firebase',
  templateUrl: './data-upload-to-firebase.component.html',
  styleUrls: ['./data-upload-to-firebase.component.css']
})
export class DataUploadToFirebaseComponent {
  constructor(private uploader: ProductUploadService) {
  }

  upload() {
    this.uploader.uploadProducts();
  }
}
