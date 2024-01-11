import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent {

  userLoggedIn = this.authService.userStatus();
  // userLoggedIn = this.authService.isLoggedIn;
  userData = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private router: Router,
              private authService: AuthService) {
    console.log('login  '+this.userLoggedIn)
    console.log(this.userData)
  }

  shouldDisplayLink(link: string): boolean {
    // Check if the current route matches the provided link
    return this.router.url !== link;
  }

  logOut() {
    this.authService.doSignOut();
  }
}
