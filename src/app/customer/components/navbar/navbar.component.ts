import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  searchTermChanged: Subject<string> = new Subject<string>();

  constructor(private router: Router,
              private authService: AuthService,
              private appService: AppService,
              private firestore: AngularFirestore,
              private fireAuth: AngularFireAuth) {
    this.quantity = Number(localStorage.getItem('quantity'));
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

    this.searchTermChanged
      .pipe(debounceTime(800))
      .subscribe(() => {
        this.onSearch();
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

  categoryMap: { [key: string]: string } = {
    'alcohol': '/alcohol',
    'alcohols': '/alcohol',
    'pizza': '/pizza',
    'pizzas': '/pizza',
    'burger': '/burgers',
    'burgers': '/burgers',
    'beer': '/beers',
    'beers': '/beers',
    'shake': '/shakes',
    'shakes': '/shakes',
    'beverage': '/beverage',
    'beverages': '/beverage',
    'coffee': '/beverage',
    'cigarette': '/cigarettes',
    'cigarettes': '/cigarettes',
    'chips': '/snacks',
    'cold drink': '/cold-drink',
    'cold drinks': '/cold-drink',
    'party essential': '/party-essentials',
    'party essentials': '/party-essentials',
    'party': '/party-essentials',
    'juice': '/fruit-juice',
    'juices': '/fruit-juice',
    'fruit juice': '/fruit-juice',
    'fruit juices': '/fruit-juice',
  };

  onSearchTermChange(term: string) {
    this.searchTermChanged.next(term);
  }

  onSearch() {
    const term = this.searchTerm.trim().toLowerCase();
    const path = this.categoryMap[term];

    if (path) {
      // Known category — go to that page
      this.router.navigate([path], {
        queryParams: {
          search: this.searchTerm,
          category: path.slice(1)
        }
      });
    } else {
      // Not a known category — perform product name search
      this.router.navigate(['/search'], {
        queryParams: {
          search: this.searchTerm
          // No category needed
        }
      });
    }
  }


  protected readonly environment = environment;
}
