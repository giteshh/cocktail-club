import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FastFoodComponent} from "./components/fast-food/fast-food.component";
import {FruitJuiceComponent} from "./components/fruit-juice/fruit-juice.component";
import {BeverageComponent} from "./components/beverage/beverage.component";
import {CocktailComponent} from "./components/cocktail/cocktail.component";
import {CartComponent} from "./components/cart/cart.component";
import {FooterComponent} from "./components/footer/footer.component";
import {PageNotFoundComponent} from "../public/components/page-not-found/page-not-found.component";


@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent,
    NavbarComponent,
    FastFoodComponent,
    FruitJuiceComponent,
    BeverageComponent,
    CocktailComponent,
    CartComponent,
    FooterComponent,
    PageNotFoundComponent

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
