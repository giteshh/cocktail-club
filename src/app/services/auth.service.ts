import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {firstValueFrom} from "rxjs";
import {LoaderService} from "./loader.service";


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  userLogInStatus: any;

  constructor(private router: Router,
              private loaderService: LoaderService,
              public fireAuth: AngularFireAuth,
              private firestore: AngularFirestore) {
    this.userStatus();
  }

  // Register new user
  async signUpWithEmailPassword(email: string, password: string): Promise<any> {
    this.loaderService.show();
    try {
      const userCredential = await this.fireAuth.createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        // Try to sign in if email already exists
        try {
          const userCredential = await this.fireAuth.signInWithEmailAndPassword(email, password);
          return userCredential.user;
        } catch (signInError) {
          throw signInError;
        }
      } else {
        // Other errors
        throw error;
      }
    } finally {
      this.loaderService.hide();
    }
  }

  // Login existing user
  async signInWithEmailPassword(email: string, password: string): Promise<any> {
    this.loaderService.show();
    try {
      const userCredential = await this.fireAuth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } finally {
      this.loaderService.hide();
    }
  }

  // Get user profile from Firestore
  async getUserProfile(uid: string): Promise<any> {
    this.loaderService.show();
    try {
      const doc = await this.firestore.collection('users').doc(uid).ref.get();
      return doc.exists ? doc.data() : null;
    } finally {
      this.loaderService.hide();
    }
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

