import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // page was opening from middle so to open the page from top used this
  navigateToTop() {
    window.scrollTo(0, 0);
  }
}
