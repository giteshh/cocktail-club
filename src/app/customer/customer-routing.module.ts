import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FastFoodComponent} from "./components/fast-food/fast-food.component";
import {FruitJuiceComponent} from "./components/fruit-juice/fruit-juice.component";
import {BeverageComponent} from "./components/beverage/beverage.component";
import {CocktailComponent} from "./components/cocktail/cocktail.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {BeersComponent} from "./components/beers/beers.component";
import {AlcoholComponent} from "./components/alcohol/alcohol.component";
import {CigarettesComponent} from "./components/cigarettes/cigarettes.component";
import {SnacksComponent} from "./components/snacks/snacks.component";
import {ColdDrinkComponent} from "./components/cold-drink/cold-drink.component";
import {PartyEssentialsComponent} from "./components/party-essentials/party-essentials.component";
import {RentSpeakerComponent} from "./components/rent-speaker/rent-speaker.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'fast-food', component: FastFoodComponent},
  {path: 'fruit-juice', component: FruitJuiceComponent},
  {path: 'beverage', component: BeverageComponent},
  {path: 'cocktail', component: CocktailComponent},
  {path: 'beers', component: BeersComponent},
  {path: 'alcohol', component: AlcoholComponent},
  {path: 'cigarettes', component: CigarettesComponent},
  {path: 'snacks', component: SnacksComponent},
  {path: 'cold-drink', component: ColdDrinkComponent},
  {path: 'party-essentials', component: PartyEssentialsComponent},
  {path: 'rent-speaker', component: RentSpeakerComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'orders', component: OrdersComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
