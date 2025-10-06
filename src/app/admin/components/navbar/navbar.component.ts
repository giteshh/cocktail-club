import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpen: boolean = true;

  constructor(private authService: AuthService,
              private firestore: AngularFirestore) {
    this.firestore.doc('appStatus/status').valueChanges().subscribe((status: any) => {
      this.isOpen = status?.isOpen;
    });
  }

  toggleStatus() {
    this.firestore.doc('appStatus/status').set(
      {isOpen: !this.isOpen},
      {merge: true}
    );
  }


  doLogOut() {
    this.authService.doSignOut();
  }

}
