import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userData: any;
  constructor(private authService: AuthService) {
    // this.getUser();
  }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('user') || '{}');
    this.userData = data.user.phoneNumber;
    console.log(this.userData);
  }

  getUser() {
    const result = this.authService.isLoggedIn;
    console.log(result);
  }

  // page was opening from middle so to open the page from top used this
  navigateToTop() {
    window.scrollTo(0, 0);
  }
}
