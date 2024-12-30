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
import { CheckoutComponent } from './components/checkout/checkout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrdersComponent } from './components/orders/orders.component';
import {PublicModule} from "../public/public.module";
import { BeersComponent } from './components/beers/beers.component';
import { AlcoholComponent } from './components/alcohol/alcohol.component';
import { CigarettesComponent } from './components/cigarettes/cigarettes.component';
import { SnacksComponent } from './components/snacks/snacks.component';
import { ColdDrinkComponent } from './components/cold-drink/cold-drink.component';
import { PartyEssentialsComponent } from './components/party-essentials/party-essentials.component';
import { RentSpeakerComponent } from './components/rent-speaker/rent-speaker.component';
import { SearchComponent } from './components/search/search.component';



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
    CheckoutComponent,
    OrdersComponent,
    BeersComponent,
    AlcoholComponent,
    CigarettesComponent,
    SnacksComponent,
    ColdDrinkComponent,
    PartyEssentialsComponent,
    RentSpeakerComponent,
    SearchComponent

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule
  ]
})
export class CustomerModule { }
