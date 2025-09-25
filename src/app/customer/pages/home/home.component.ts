import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData: any = {};

  constructor( ) {
  }

  ngOnInit() {
    let data = (localStorage.getItem('user') || []);
    // this.userData = data.user.phoneNumber;
    console.log('User data : ' + data);
    console.log(localStorage.getItem('verificationId'))
  }

  navigateToTop() {
    window.scrollTo(0, 0);
  }
}
