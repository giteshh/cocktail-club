import {Component, OnInit} from '@angular/core';
import {ProductsInterface} from "../../../../assets/data/products-interface";
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
  results: ProductsInterface[] = [];
  cart: ProductsInterface[] = [];
  existingProduct = false;
  category: string = '';

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
      this.category = params['category'] || '';
      this.filterResults();
    });
  }

  filterResults() {
    this.appService.searchProducts(this.category, this.searchTerm)
      .then(products => {
        this.results = products;
        if (products.length === 0) {
          this.toastr.info('No products matched your search.', '', {
            positionClass: 'toast-top-center',
            timeOut: 3000,
            closeButton: true,
          });
        }
      })
      .catch(error => {
        this.toastr.error('Failed to load products');
        console.error(error);
      });
  }


  async addToCart(product: ProductsInterface) {
    try {
      const currentCart = await this.appService.getCart();
      const exists = currentCart.some((item) => item.id === product.id);

      if (!exists) {
        await this.appService.addToCart(product);
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
