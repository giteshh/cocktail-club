import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {AppService} from "../../../services/app.service";
import {debounceTime, switchMap} from 'rxjs/operators';
import {Subject} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {environment} from "../../../../environments/environment";

interface UserProfile {
  fullName: string;
  phoneNumber: string;
  address: string;
  email?: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit, OnDestroy {

  userLoggedIn = false;
  userPhone: any = '';
  userName: any = '';
  userAddress: any = '';
  quantity;

  // for search
  placeholders = [
    'Discover Cocktails for Tonight 🍷',
    'Craving a Burger? Search Now 🍔',
    'Search refreshing Juice 🍉',
    'Find Hot & Fresh Pizzas 🍕',
    'Search Refreshing Cold Drinks 🥶',
    'Search your favourite Beer brand 🍺',
    'Looking for a Fine Wine? 🍷',
    'Need a Smoke Break? Find Cigarettes 🚬',
    'Search your favourite coffee 🍵',
    'Your Favorite Cigarettes, Just a Search Away 🚬'
  ];
  currentPlaceholder = this.placeholders[0];
  placeholderIndex = 0;
  typingInterval: any;
  searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();
  private searchSubject = new Subject<string>();

  constructor(private router: Router,
              private authService: AuthService,
              private appService: AppService,
              private firestore: AngularFirestore,
              private fireAuth: AngularFireAuth) {
    this.quantity = Number(localStorage.getItem('quantity'));
  }

  shouldDisplayLink(link: string): boolean {
    // Check if the current route matches the provided link
    return this.router.url !== link;
  }

  logOut() {
    this.authService.doSignOut();
  }

  ngOnInit(): void {
    this.fireAuth.authState.subscribe(async (user) => {
      if (user) {
        this.userLoggedIn = true;
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
        this.userLoggedIn = false;
        this.userName = '';
        this.userPhone = '';
        this.userAddress = '';
      }
    });

    this.startPlaceholderAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startPlaceholderAnimation(): void {
    this.typePlaceholder(this.placeholders[this.placeholderIndex]);
    this.typingInterval = setInterval(() => {
      this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholders.length;
      this.typePlaceholder(this.placeholders[this.placeholderIndex]);
    }, 6000);
  }

  typePlaceholder(placeholder: string): void {
    const input = <HTMLInputElement>document.querySelector('.search-input');
    let currentText = '';
    let index = 0;

    // Set the initial placeholder
    input.placeholder = placeholder;

    // Simulate typing letter by letter
    const typeLetter = () => {
      if (index < placeholder.length) {
        currentText += placeholder[index];
        input.placeholder = currentText + ' |';
        index++;
      } else {
        clearInterval(typingTimer);
      }
    };

// Adjust typing speed by changing this interval
    const typingTimer = setInterval(typeLetter, 100);
  }

// Stop changing placeholder text on focus
  onFocus(): void {
    if (this.typingInterval) {
      // clearInterval(this.typingInterval);
    }
  }

  // Restart animation on blur
  onBlur(): void {
    this.startPlaceholderAnimation();
  }

  onSearch() {
    this.searchTerm.toLowerCase().trim();

    if (this.searchTerm === 'alcohol' || this.searchTerm === 'alcohols') {
      this.router.navigate(['/alcohol']);
    } else if (this.searchTerm === 'pizza' || this.searchTerm === 'burger' || this.searchTerm === 'burgers'
      || this.searchTerm === 'fast food' || this.searchTerm === 'fries') {
      this.router.navigate(['/fast-food'], {queryParams: {search: this.searchTerm}});
    } else if (this.searchTerm === 'beer' || this.searchTerm === 'beers') {
      this.router.navigate(['/beers'], {queryParams: {search: this.searchTerm}});
    } else if (this.searchTerm === 'shakes' || this.searchTerm === 'shake' || this.searchTerm === 'beverage'
      || this.searchTerm === 'beverages' || this.searchTerm === 'coffee') {
      this.router.navigate(['/beverage'], {queryParams: {search: this.searchTerm}});
    } else if (this.searchTerm === 'cigarette' || this.searchTerm === 'cigarettes') {
      this.router.navigate(['/cigarettes'], {queryParams: {search: this.searchTerm}});
    } else if (this.searchTerm === 'chips') {
      this.router.navigate(['/snacks'], {queryParams: {search: this.searchTerm}});
    } else if (this.searchTerm === 'cold drinks' || this.searchTerm === 'cold drink') {
      this.router.navigate(['/cold-drink'], {queryParams: {search: this.searchTerm}});
    } else if (this.searchTerm === 'party essential' || this.searchTerm === 'party essentials'
      || this.searchTerm === 'party') {
      this.router.navigate(['/party-essentials'], {queryParams: {search: this.searchTerm}});
    } else if (this.searchTerm === 'juice' || this.searchTerm === 'juices'
      || this.searchTerm === 'fruit juices' || this.searchTerm === 'fruit juice') {
      this.router.navigate(['/fruit-juice'], {queryParams: {search: this.searchTerm}});
    } else {
      this.router.navigate(['/search'], {queryParams: {search: this.searchTerm}});
    }
  }

  protected readonly environment = environment;
}
