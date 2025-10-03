import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {HomeComponent} from "./pages/home/home.component";
import {FastFoodComponent} from "./pages/fast-food/fast-food.component";
import {FruitJuiceComponent} from "./pages/fruit-juice/fruit-juice.component";
import {BeverageComponent} from "./pages/beverage/beverage.component";
import {CocktailComponent} from "./pages/cocktail/cocktail.component";
import {CartComponent} from "./pages/cart/cart.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrdersComponent} from './pages/orders/orders.component';
import {PublicModule} from "../public/public.module";
import {BeersComponent} from './pages/beers/beers.component';
import {AlcoholComponent} from './pages/alcohol/alcohol.component';
import {CigarettesComponent} from './pages/cigarettes/cigarettes.component';
import {SnacksComponent} from './pages/snacks/snacks.component';
import {ColdDrinkComponent} from './pages/cold-drink/cold-drink.component';
import {PartyEssentialsComponent} from './pages/party-essentials/party-essentials.component';
import {RentSpeakerComponent} from './pages/rent-speaker/rent-speaker.component';
import {SearchComponent} from './components/search/search.component';
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {
  AnimatedProductCarouselComponent
} from './components/animated-product-carousel/animated-product-carousel.component';
import {FeatureProductsComponent} from './pages/feature-products/feature-products.component';
import {TestimonialsComponent} from "./pages/testimonials/testimonials.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HireComponent} from './pages/hire/hire.component';
import {HireCarouselComponent} from './components/hire-carousel/hire-carousel.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {NavbarComponent} from "./components/navbar/navbar.component";


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
    SearchComponent,
    AnimatedProductCarouselComponent,
    FeatureProductsComponent,
    TestimonialsComponent,
    HireComponent,
    HireCarouselComponent,
    NavbarComponent

  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    CarouselModule
  ]
})
export class CustomerModule {
}
