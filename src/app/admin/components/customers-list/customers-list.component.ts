import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserProfile} from "../../../../assets/data/cart-items";
import {Subscription} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, OnDestroy {

  usersList: UserProfile[] = [];
  private usersSub: Subscription | any = null;

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.usersSub = this.firestore
      .collection<UserProfile>('users')
      .valueChanges({idField: 'id'})
      .subscribe(users => {
        this.usersList = users;
      });
  }

  ngOnDestroy() {
    if (this.usersSub) {
      this.usersSub.unsubscribe();
    }
  }
}
