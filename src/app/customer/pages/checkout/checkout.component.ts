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


  constructor(private formBuilder: FormBuilder,
              private winRef: WindowService,
              private authService: AuthService,
              private appService: AppService,
              private router: Router,
              private toastr: ToastrService,
              private fireAuth: AngularFireAuth,) {
  }

  async ngOnInit() {
    this.cart = await this.appService.getCart();
    this.calculateTotal();

    // Init form
    this.checkoutForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    });

    // Prefill form with user profile
    this.fireAuth.authState.subscribe(async (user) => {
      if (user) {
        this.userId = user.uid;
        const profile = await this.authService.getUserProfile(user.uid);
        if (profile) {
          console.log('Profile fetched:', profile);
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
    this.total = this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  async onSubmit() {
    if (this.checkoutForm.invalid) return;

    const order: any = {
      items: this.cart,
      total: this.total,
      date: new Date()
    };

    try {
      await this.appService.placeOrder(order);
      this.payWithRazor();

      this.toastr.success('Order placed successfully!', '', {timeOut: 3000});
      this.router.navigate(['/orders']);
    } catch (error) {
      console.error(error);
      this.toastr.error('Failed to place order.', '', {timeOut: 3000});
    }
  }


  payWithRazor() {
    const options: any = {
      key: 'rzp_test_pKtL3VyA60NvPP',
      amount: Math.round(this.total) * 100, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Cocktail Club', // company name or product name
      description: '',
      id: Math.random().toString(36),
      prefill: {
        name: 'Cocktail Club',
        email: 'info@cocktailclub.com',
        phone: '9898989898',
        method: "card"
      },
      modal: {
        escape: false,
      },
      notes: {
        msg: 'Thank you for shopping with Cocktail Club'
      },
      theme: {
        color: '#FF6912'
      }
    };
    options.handler = ((response: any, error: any) => {
      options.response = response;
      this.toastr.success('Order placed successfully', '', {
        positionClass: 'toast-top-right',
        timeOut: 3000,
      });
      this.toastr.info('Cocktail Club accepted your order', '', {
        positionClass: 'toast-top-right',
        timeOut: 3000,
      });

      this.appService.addToOrders(this.cart);

      this.router.navigate(['/orders'])
      localStorage.removeItem('cart');
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      this.toastr.warning('Transaction failed. Please try again...', '', {
        positionClass: 'toast-top-right',
        timeOut: 3000,
      });
      this.router.navigate(['/cart'])
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

}
