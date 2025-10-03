import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WindowService} from "../../../services/window.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import firebase from "firebase/compat/app";
import {Product} from "../../../../assets/data/products";
import {AppService} from "../../../services/app.service";
import {CartItem, Order} from "../../../../assets/data/cart-items";
import {AuthService} from "../../../services/auth.service";
import {firstValueFrom} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";

interface orderItems {
  id: number,
  name: string,
  image: string,
  price: number,
  quantity: number,
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup | any;
  user: any;
  fullName: any;
  phoneNumber: any;
  address: any;
  total: number = 0;
  orders: Product [] = [];
  cart: CartItem[] = [];
  userId: string = '';

  productPrice: number = 0;
  sgst: number = 0;
  cgst: number = 0;
  deliveryCharge: number = Math.floor(Math.random() * (50 - 20) + 20);


  constructor(private formBuilder: FormBuilder,
              private winRef: WindowService,
              private authService: AuthService,
              private appService: AppService,
              private router: Router,
              private toastr: ToastrService,
              private fireAuth: AngularFireAuth,
              private firestore: AngularFirestore,) {
  }

  async ngOnInit() {
    // Init form
    this.checkoutForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.fireAuth.authState.subscribe(async (user) => {
      if (user) {
        this.userId = user.uid;

        // Get cart from Firestore using your AppService
        this.cart = await this.appService.getCart();
        this.calculateTotal();

        // Get user profile
        const profile = await this.authService.getUserProfile(user.uid);
        if (profile) {
          this.checkoutForm.patchValue({
            fullName: profile.fullName ?? '',
            phoneNumber: profile.phoneNumber ?? '',
            address: profile.address ?? '',
          });
        }
      } else {
        this.router.navigate(['/signin']);
      }
    });
  }

  calculateTotal() {
    this.productPrice = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.sgst = this.productPrice * 0.05;
    this.cgst = this.productPrice * 0.05;
    this.deliveryCharge = Math.floor(Math.random() * (50 - 20) + 20); // you can decide to fix this somewhere
    this.total = this.productPrice + this.sgst + this.cgst + this.deliveryCharge;
  }

  async onSubmit() {
    if (this.checkoutForm.invalid) return;

    const order: Order = {
      items: this.cart,
      total: this.total,
      date: new Date(),
      status: 'pending',
      createdAt: new Date(),
      id: this.firestore.createId()
    };

    try {
      await this.appService.placeOrder(order);
      this.toastr.success('Order placed successfully!', '', {timeOut: 3000});
      this.cart = [];
      this.calculateTotal();
      this.router.navigate(['/orders']);
      this.payWithRazor(order);
    } catch (error) {
      console.error(error);
      this.toastr.error('Failed to place order.', '', {timeOut: 3000});
    }
  }


  payWithRazor(order: Order) {
    const options: any = {
      key: 'rzp_test_pKtL3VyA60NvPP',
      amount: Math.round(order.total) * 100, // paise
      currency: 'INR',
      name: 'Cocktail Club',
      description: '',
      prefill: {
        name: this.checkoutForm.value.fullName,
        email: 'info@cocktailclub.com',
        phone: this.checkoutForm.value.phoneNumber,
        method: "card"
      },
      notes: {msg: 'Thank you for shopping with Cocktail Club'},
      theme: {color: '#FF6912'}
    };

    options.handler = (response: any) => {
      this.toastr.success('Payment successful', '', {timeOut: 3000});
      // Here you can update the order in Firestore with paymentId if needed
      this.firestore.collection('orders').doc(order.id).update({
        paymentId: response.razorpay_payment_id,
        status: 'completed'
      });
    };

    options.modal = {
      escape: false,
      ondismiss: () => {
        this.toastr.warning('Transaction failed or closed', '', {timeOut: 3000});
      }
    };

    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }


}
