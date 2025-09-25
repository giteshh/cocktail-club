import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FastFoodComponent} from "./pages/fast-food/fast-food.component";
import {FruitJuiceComponent} from "./pages/fruit-juice/fruit-juice.component";
import {BeverageComponent} from "./pages/beverage/beverage.component";
import {CocktailComponent} from "./pages/cocktail/cocktail.component";
import {CartComponent} from "./pages/cart/cart.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {BeersComponent} from "./pages/beers/beers.component";
import {AlcoholComponent} from "./pages/alcohol/alcohol.component";
import {CigarettesComponent} from "./pages/cigarettes/cigarettes.component";
import {SnacksComponent} from "./pages/snacks/snacks.component";
import {ColdDrinkComponent} from "./pages/cold-drink/cold-drink.component";
import {PartyEssentialsComponent} from "./pages/party-essentials/party-essentials.component";
import {RentSpeakerComponent} from "./pages/rent-speaker/rent-speaker.component";
import {SearchComponent} from "./components/search/search.component";
import {HireComponent} from "./pages/hire/hire.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
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
  {path: 'search', component: SearchComponent},
  {path: 'hire', component: HireComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
