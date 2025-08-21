import {Component} from '@angular/core';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";

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
      img: 'https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFufGVufDB8fDB8fHwy',
      title: 'Kiara',
      description: `Cocktail Club made our house party unforgettable!
      The mango mojitos were super refreshing and the chicken burgers were juicy and delicious.
      We also hired a chef through the site – absolutely professional and efficient. Highly recommended!`
    },
    {
      img: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHwy',
      title: 'Vihaan',
      description: `One-stop shop for party lovers! From great cocktails to yummy pizzas,
      Cocktail Club has it all. I especially loved their Whiskey Sour – top-notch quality.
      Also rented a speaker system that worked perfectly all night!`
    },
    {
      img: 'https://images.unsplash.com/photo-1622782262245-bfb660f4ff93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFufGVufDB8fDB8fHwy',
      title: 'Ira',
      description: `Even as a non-drinker, I loved Cocktail Club for their variety.
      The fresh orange juice was spot on, and the veg burger was crispy and flavorful.
      I also booked after-party cleaning staff and they were super efficient. No mess, no stress!`
    },
    {
      img: 'https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFufGVufDB8fDB8fHwy',
      title: 'Ayaan',
      description: `I threw a rooftop party with everything from Cocktail Club – cocktails, food, even a DJ speaker.
       The classic margaritas were just perfect and the BBQ chicken pizza was a hit with everyone.
      They really know how to deliver quality!`
    },
    {
      img: 'https://images.unsplash.com/photo-1622049605334-72e1e4432346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8Mg%3D%3D',
      title: 'Saanvi',
      description: `I hosted a casual get-together and ordered snacks and beverages from Cocktail Club.
      The cold coffee was thick and creamy, and the fries were crispy just the way I like them.
      Also loved how easy it was to book a maid for post-party cleanup!`
    },
    {
      img: 'https://images.unsplash.com/photo-1607081692251-d689f1b9af84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbnxlbnwwfHwwfHx8Mg%3D%3D',
      title: 'Reyansh',
      description: `Had friends over for a game night and ordered beers and spicy wings from Cocktail Club.
      Everything came on time, chilled and delicious. Their service is quick, reliable, and super convenient.
       Cheers to more parties!`
    },

  ];

  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 600,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',
    responsive: {
      0: {items: 1},
      768: {items: 1},
      979: {items: 1},
      1000: {items: 1}
    }
  };
}
