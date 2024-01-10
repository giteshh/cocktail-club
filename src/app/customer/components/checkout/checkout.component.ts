import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WindowService} from "../../../services/window.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private winRef: WindowService,
              private router: Router,
              private toastr: ToastrService) {
    this.checkoutForm = formBuilder.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
    })
  }

  onSubmit() {
    this.payWithRazor();
  }

  createRzpayOrder(data: any) {
    console.log(data);
    this.payWithRazor();
  }

  payWithRazor() {
    const options: any = {
      key: 'rzp_test_pKtL3VyA60NvPP',
      amount: 125500, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Cocktail Club', // company name or product name
      description: '',
      id: Math.random().toString(36),
      prefill: {
        name: 'sai kumar',
        email: 'sai@gmail.com',
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
      console.log(response);
      console.log(options);
      this.toastr.success('Order placed successfully', '', {
        positionClass: 'toast-top-right',
        timeOut: 3000,
      });
      this.toastr.info('Waiting for Restaurant to accept your order', '', {
        positionClass: 'toast-top-right',
        timeOut: 3000,
      });
      this.router.navigate(['/orders'])
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
      this.router.navigate(['/cart'])
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

}
