import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WindowService} from "../../../services/window.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ProductsInterface} from "../../../../assets/data/products-interface";
import {AppService} from "../../../services/app.service";
import {CartItem, Order} from "../../../../assets/data/cart-items";
import {AuthService} from "../../../services/auth.service";
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
  orders: ProductsInterface [] = [];
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
    this.deliveryCharge = Math.floor(Math.random() * (50 - 20) + 20);
    this.total = this.productPrice + this.sgst + this.cgst + this.deliveryCharge;
  }

  async onSubmit() {
    if (this.checkoutForm.invalid) return;

    const order: Order = {
      id: this.firestore.createId(),
      userId: this.userId,
      items: this.cart,
      total: this.total,
      createdAt: new Date(),
      status: 'Waiting for CC to accept your order'
    };

    // Open Razorpay checkout — order not created yet
    this.payWithRazor(order);
  }

  payWithRazor(order: Order) {
    const options: any = {
      key: 'rzp_test_pKtL3VyA60NvPP',
      amount: Math.round(order.total) * 100, // convert to paise
      currency: 'INR',
      name: 'Cocktail Club',
      description: 'Cocktail Club Order Payment',
      prefill: {
        name: this.checkoutForm.value.fullName,
        email: 'info@cocktailclub.com',
        contact: this.checkoutForm.value.phoneNumber,
      },
      notes: {msg: 'Thank you for shopping with Cocktail Club'},
      theme: {color: '#FF6912'},

      handler: async (response: any) => {
        // Payment successful — only now save order in Firestore
        try {
          await this.firestore.collection('orders').doc(order.id).set({
            ...order,
            paymentId: response.razorpay_payment_id,
            paymentStatus: 'Success',
          });

          this.toastr.success('Payment successful! Order placed.', '', {timeOut: 3000});

          // clear cart
          this.cart = [];
          await this.appService.clearCart();

          this.router.navigate(['/orders']);
        } catch (err) {
          console.error('Error saving order after payment:', err);
          this.toastr.error('Failed to save order after payment.', '', {timeOut: 3000});
        }
      },

      modal: {
        escape: false,
        ondismiss: () => {
          this.toastr.warning('Payment cancelled or failed.', '', {timeOut: 3000});
        },
      },
    };

    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }
}
