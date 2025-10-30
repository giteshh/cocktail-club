import {Component} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {environment} from "../../../../environments/environment";

interface Testimonial {
  img: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  testimonials: Testimonial[] = [
    {
      img: `${environment.imageUrl}/products/cocktail/coolblue.jpg`,
      title: 'Kiara',
      description: `Cocktail Club made our house party unforgettable!
      The cocktails were super refreshing and the burgers were juicy and delicious.
      We also hired a chef through the site – absolutely professional and efficient. Highly recommended!`
    },
    {
      img: `${environment.imageUrl}/products/cocktail/appletini.jpg`,
      title: 'Vihaan',
      description: `One-stop shop for party lovers! From great cocktails to yummy pizzas,
      Cocktail Club has it all. I especially loved their Apple Tini – top-notch quality.
      Also rented a speaker system that worked perfectly all night!`
    },
    {
      img: `${environment.imageUrl}/products/burgers/cheeseburger.jpg`,
      title: 'Ira',
      description: `Even as a non-drinker, I loved Cocktail Club for their variety.
      The fresh orange juice was spot on, and the Aaloo tikki burger was crispy and flavorful.
      I also booked after-party cleaning staff and they were super efficient. No mess, no stress!`
    },
    {
      img: `${environment.imageUrl}/products/pizza/cheesilisious.jpg`,
      title: 'Ayaan',
      description: `I threw a rooftop party with everything from Cocktail Club – cocktails, food, even a DJ speaker.
       The classic margaritas were just perfect and the Cheesilious pizza was a hit with everyone.
      They really know how to deliver quality!`
    },
    {
      img: `${environment.imageUrl}/products/cold-beverages/cold-coffee.jpg`,
      title: 'Saanvi',
      description: `I hosted a casual get-together and ordered snacks and beverages from Cocktail Club.
      The cold coffee was thick and creamy, and the fries were crispy just the way I like them.
      Also loved how easy it was to book a maid for post-party cleanup!`
    },
    {
      img: `${environment.imageUrl}/products/beers/carlsberg-elephant.jpg`,
      title: 'Reyansh',
      description: `Had friends over for a game night and ordered beers and cocktails from Cocktail Club.
      Everything came on time, chilled and delicious. Their service is quick, reliable, and super convenient.
       Cheers to more parties!`
    },

  ];

  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 600,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {items: 1},
      768: {items: 1},
      979: {items: 1},
      1000: {items: 1},
      1500: {items: 1},
      2000: {items: 1}
    }
  };
}
