import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

interface UserProfile {
  fullName: string;
  phoneNumber: string;
  address: string;
  email?: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userPhone: any = '';
  userName: any = '';
  userAddress: any = '';

  constructor(private firestore: AngularFirestore,
              private fireAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.fireAuth.authState.subscribe(async (user) => {
      if (user) {
        const uid = user.uid;

        const userDoc = await this.firestore
          .collection<UserProfile>('users')
          .doc(uid)
          .ref.get();

        if (userDoc.exists) {
          const userData = userDoc.data() as UserProfile;

          this.userPhone = userData?.phoneNumber || '';
          this.userName = userData?.fullName || '';
          this.userAddress = userData?.address || '';
        } else {
          console.log('No profile found in Firestore for this user.');
        }
      } else {
        console.log('No user logged in.');
      }
    });
  }


  navigateToTop() {
    window.scrollTo(0, 0);
  }
}
