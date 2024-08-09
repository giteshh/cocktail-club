import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WindowService} from "../../../services/window.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  user: any;
  fullName;
  phoneNumber;
  address;
  city;
  zipCode;
  total;
  cart= [];
  orders: any = [];

  constructor(private formBuilder: FormBuilder,
              private winRef: WindowService,
              private router: Router,
              private toastr: ToastrService,
              private appService: AppService) {

    this.fullName = JSON.parse(localStorage.getItem('fullName') || '');
    this.phoneNumber = JSON.parse(localStorage.getItem('phoneNumber') || '');
    this.address = (localStorage.getItem('address') || '');
    this.city = (localStorage.getItem('city') || '');
    this.zipCode = (localStorage.getItem('zipCode') || '');
    this.total = JSON.parse(localStorage.getItem('total') || '');
    this.cart = JSON.parse(localStorage.getItem('cart') || '{}');
    this.orders = this.orders.push(this.cart);

    this.checkoutForm = formBuilder.group({
      fullName: [this.fullName, Validators.required],
      phoneNumber: [this.phoneNumber, Validators.required],
      address: [this.address, Validators.required],
      city: [this.city, Validators.required],
      zipCode: [this.zipCode, Validators.required],
    })
  }

  onSubmit() {
    localStorage.setItem(
      'address',
      JSON.stringify(this.checkoutForm.value.address)
    );

    localStorage.setItem(
      'city',
      JSON.stringify(this.checkoutForm.value.city)
    );
    localStorage.setItem(
      'zipCode',
      JSON.stringify(this.checkoutForm.value.zipCode)
    );
    this.payWithRazor();
  }

  createRzpayOrder(data: any) {
    this.payWithRazor();
  }

  payWithRazor() {
    const options: any = {
      key: 'rzp_test_pKtL3VyA60NvPP',
      amount: this.total * 100, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Cocktail Club',
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
      console.log(options.response)
      this.toastr.success('Order placed successfully', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
      });
      this.toastr.info('Cocktail Club to accepted your order', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
      });
      this.appService.addToOrders(this.orders);
      this.router.navigate(['/orders'])
      localStorage.removeItem('cart');
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      this.toastr.warning('Transaction failed. Please try again...', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
      });
      this.router.navigate(['/cart'])
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

}
