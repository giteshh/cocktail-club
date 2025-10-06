import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {
  private sub: Subscription | any;

  constructor(private firestore: AngularFirestore,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.firestore.doc('appStatus/status').valueChanges().subscribe((status: any) => {
      if (status?.isOpen === false) {
        this.router.navigate(['/closed']);
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
