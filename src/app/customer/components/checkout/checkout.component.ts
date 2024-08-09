import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WindowService} from "../../../services/window.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import firebase from "firebase/compat/app";
import {Product} from "../../../../assets/data/products";
import {AppService} from "../../../app.service";

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
export class CheckoutComponent {
  checkoutForm: FormGroup;
  user: any;
  fullName;
  phoneNumber;
  address;
  city;
  zipCode;
  total;
  orders: Product [] = [];
  cart: Product[] = [];


  constructor(private formBuilder: FormBuilder,
              private winRef: WindowService,
              private appService: AppService,
              private router: Router,
              private toastr: ToastrService) {

    this.fullName = JSON.parse(localStorage.getItem('fullName') || '{}');
    this.phoneNumber = JSON.parse(localStorage.getItem('phoneNumber') || '{}');
    this.address = JSON.parse(localStorage.getItem('address') || '{}');
    this.city = JSON.parse(localStorage.getItem('city') || '{}');
    this.zipCode = JSON.parse(localStorage.getItem('zipCode') || '{}');
    this.total = JSON.parse(localStorage.getItem('total') || '{}');

    this.cart = JSON.parse(localStorage.getItem('cart') || '')

    this.checkoutForm = formBuilder.group({
      fullName: [this.fullName, Validators.required],
      phoneNumber: [this.phoneNumber, Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: [this.zipCode, Validators.required],
    })
  }

  onSubmit() {

    let fullName: string = this.checkoutForm.value.fullName;
    let address = JSON.stringify(this.checkoutForm.value.address);
    let city = this.city;
    let zipCode: string = this.checkoutForm.value.zipCode;

    let userId = firebase.auth().currentUser?.uid;

    firebase.firestore().collection("users").doc(userId).set({
      phoneNumber: this.phoneNumber,
      fullName: fullName,
      photoURL: "",
      orders: "",
      paymentId: "",
      role: 2,
      address: address,
      city: city,
      zipCode: zipCode,
    }).then(() => {
      if (!address) {
        localStorage.setItem(
          'address',
          JSON.stringify(this.checkoutForm.value.address)
        );
      }
      localStorage.setItem(
        'city',
        JSON.stringify(this.checkoutForm.value.city)
      );
      localStorage.setItem(
        'zipCode',
        JSON.stringify(this.checkoutForm.value.zipCode)
      );
      this.payWithRazor();

    }).catch((error) => {
      console.log(error)
    })
  }

  createRzpayOrder(data: any) {
    this.payWithRazor();
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

      this.appService.addToOrders(this.orders);

      this.router.navigate(['/orders'])
      // localStorage.removeItem('cart');
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
