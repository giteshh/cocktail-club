import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent {
  constructor(private router: Router) {}

  shouldDisplayLink(link: string): boolean {
    // Check if the current route matches the provided link
    return this.router.url !== link;
  }
}
