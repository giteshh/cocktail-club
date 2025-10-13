import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {cocktail, Product} from "../../../../assets/data/products";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../../services/app.service";
import {ToastrService} from "ngx-toastr";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  results: Product[] = [];
  cart: Product[] = [];
  existingProduct = false;

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private toastr: ToastrService,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
      this.filterResults();
    });
  }

  filterResults() {
    if (this.searchTerm.trim()) {
      this.results = this.dataService.getAllProducts().filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.results = this.dataService.getAllProducts();
    }
  }


  async addToCart(cocktails: any) {
    try {
      // Get current cart from Firestore
      const currentCart = await this.appService.getCart();

      // Check if item already exists
      const existingProduct = currentCart.some((item) => item.id === cocktails.id);

      if (!existingProduct) {
        // Add item to Firestore cart
        await this.appService.addToCart(cocktails);

        this.toastr.success('Selected item has been added to the cart!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      } else {
        this.toastr.info('Selected item already exists in the cart!', '', {
          positionClass: 'toast-top-center',
          timeOut: 3000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      this.toastr.error('Failed to add item to the cart.', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true,
      });
    }

  }

  protected readonly environment = environment;
}
