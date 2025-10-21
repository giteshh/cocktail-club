import {Component} from '@angular/core';
import {ProductsInterface} from "../../../../assets/data/products-interface";
import {AppService} from "../../../services/app.service";
import {ToastrService} from "ngx-toastr";
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent {
  hire: ProductsInterface[] = [];
  cart: ProductsInterface[] = [];
  existingProduct = false;

  startDate: string = '';
  endDate: string = '';

  constructor(
    private appService: AppService,
    private toastr: ToastrService
  ) {
  }

  async ngOnInit() {
    this.hire = await this.appService.getProductsByCategory('hire');
  }

  calculateDays(): number {
    if (!this.startDate || !this.endDate) return 0;
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const diff = end.getTime() - start.getTime();
    return diff >= 0 ? Math.ceil(diff / (1000 * 3600 * 24)) + 1 : 0;
  }

  getTotalPrice(pricePerDay: number): number {
    return this.calculateDays() * pricePerDay;
  }

  async addToCart(hire: any) {
    const days = this.calculateDays();

    if (!this.startDate || !this.endDate || days <= 0) {
      this.toastr.warning('Please select a valid rental date range.', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true
      });
      return;
    }

    try {
      const currentCart = await this.appService.getCart();
      const exists = currentCart.some((item) =>
        item.id === hire.id
      );

      if (!exists) {
        const rentalItem = {
          ...hire,
          rental: true,
          startDate: this.startDate,
          endDate: this.endDate,
          totalDays: days,
          totalPrice: this.getTotalPrice(hire.price)
        };

        await this.appService.addToCart(rentalItem);

        this.toastr.success('Rental item added to cart!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true
        });
      } else {
        this.toastr.info('This rental item is already in your cart.', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true
        });
      }
    } catch (error) {
      console.error('Error adding rental to cart:', error);
      this.toastr.error('Failed to add rental item.', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true
      });
    }
  }

  protected readonly environment = environment;
}
