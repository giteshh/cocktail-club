import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {firstValueFrom} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  userLogInStatus: any;

  constructor(private router: Router,
              private fireAuth: AngularFireAuth,
              private firestore: AngularFirestore) {
    this.userStatus();
  }

  // Register new user
  signUpWithEmailPassword(email: string, password: string): Promise<any> {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => userCredential.user);
  }

  // Login existing user
  signInWithEmailPassword(email: string, password: string): Promise<any> {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => userCredential.user);
  }

  // Get user profile from Firestore
  getUserProfile(uid: string): Promise<any> {
    return this.firestore
      .collection('users')
      .doc(uid)
      .ref.get()
      .then((doc) => (doc.exists ? doc.data() : null));
  }

  // Check if email exists
  checkEmailExists(email: string): Promise<string[]> {
    return this.fireAuth.fetchSignInMethodsForEmail(email);
  }


  doSignOut() {
    localStorage.clear();
    this.userLogInStatus = false;
    this.fireAuth.signOut().then(() => {
      this.router.navigate(['/signin']);
      this.userStatus();
    });
  }

  userStatus() {
    const user = localStorage.getItem('user');
    this.userLogInStatus = !!user;
    return this.userLogInStatus;
  }

  async isLoggedInAsync(): Promise<boolean> {
    return new Promise((resolve) => {
      this.fireAuth.authState.subscribe(user => {
        resolve(!!user);
      });
    });
  }
}

