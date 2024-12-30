import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {cocktail, Product} from "../../../../assets/data/products";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../../app.service";
import {ToastrService} from "ngx-toastr";

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


  addToCart(cocktails: any) {
    this.existingProduct = false;
    if (this.appService.getCart()) {
      this.cart = this.appService.getCart();
      this.cart.forEach((cart: any) => {
        if (cart.id == cocktails.id) {
          this.existingProduct = true;
        }
      })
    }
    if (!this.existingProduct) {
      this.appService.addToCart(cocktails);
      this.toastr.success('Selected item has been added to the cart!', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true
      });
    } else {
      this.toastr.info('Selected item already exists in the cart!', '', {
        positionClass: 'toast-top-center',
        timeOut: 3000,
        closeButton: true
      });
    }

  }
}
