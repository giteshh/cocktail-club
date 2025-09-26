import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {AppService} from "../../../services/app.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent {

  userLoggedIn = this.authService.userStatus();
  // userLoggedIn = this.authService.isLoggedIn;
  fullName;
  quantity;


  constructor(private router: Router,
              private authService: AuthService,
              private appService: AppService) {
    this.fullName = JSON.parse(localStorage.getItem('fullName') || '{}');
    this.quantity = Number(localStorage.getItem('quantity'));
    console.log(this.quantity)
    console.log(this.userLoggedIn)
  }

  shouldDisplayLink(link: string): boolean {
    // Check if the current route matches the provided link
    return this.router.url !== link;
  }

  logOut() {
    this.authService.doSignOut();
  }
}
