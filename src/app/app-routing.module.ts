import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FastFoodComponent} from "./components/fast-food/fast-food.component";
import {FruitJuiceComponent} from "./components/fruit-juice/fruit-juice.component";
import {BeverageComponent} from "./components/beverage/beverage.component";
import {CocktailComponent} from "./components/cocktail/cocktail.component";
import {CartComponent} from "./components/cart/cart.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'fast-food', component: FastFoodComponent},
  {path: 'fruit-juice', component: FruitJuiceComponent},
  {path: 'beverage', component: BeverageComponent},
  {path: 'cocktail', component: CocktailComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
