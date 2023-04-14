import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FastFoodComponent } from './components/fast-food/fast-food.component';
import { FruitJuiceComponent } from './components/fruit-juice/fruit-juice.component';
import { BeverageComponent } from './components/beverage/beverage.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FastFoodComponent,
    FruitJuiceComponent,
    BeverageComponent,
    CocktailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
