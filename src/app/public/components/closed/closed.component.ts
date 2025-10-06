import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.css']
})
export class ClosedComponent implements OnInit, OnDestroy {
  private sub: Subscription | any;

  constructor(private firestore: AngularFirestore,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.firestore.doc('appStatus/status').valueChanges().subscribe((status: any) => {
      if (status?.isOpen === true) {
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
