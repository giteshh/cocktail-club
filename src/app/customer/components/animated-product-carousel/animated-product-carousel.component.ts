import {
  Component,
  OnDestroy,
  OnInit,

} from '@angular/core';

@Component({
  selector: 'app-animated-product-carousel',
  templateUrl: './animated-product-carousel.component.html',
  styleUrls: ['./animated-product-carousel.component.css'],
  standalone: false
})
export class AnimatedProductCarouselComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'Cocktails',
      tagline: 'Eat. Sleep. Cocktail. Repeat.',
      offer: '* Buy 1 Get 1 on Cocktails upto INR 599/-. Happy Hour O\'clock.',
      image: '../../../../assets/images/home/cocktail.jpg',
      link: '/cocktail'
    },
    {
      title: 'Beer',
      tagline: 'Would you say no to another?',
      offer: '* 2% flat off on selected beers.',
      image: '../../../../assets/images/home/beer.jpg',
      link: '/beers'
    },
    {
      title: 'Alcohol',
      tagline: 'Get the party started',
      offer: '* INR 200 off upto INR 2599/-.',
      image: '../../../../assets/images/home/alcohol.jpg',
      link: '/alcohol'
    },
    {
      title: 'Beverages',
      tagline: 'Beverages that refreshes the body. Refreshes the soul.',
      offer: '* Buy 1 Get 1 on all hot and cold beverages',
      image: '../../../../assets/images/home/beverage.jpg',
      link: '/beverage'
    },
    {
      title: 'Fast Food',
      tagline: 'Fast Fuel for Hungry Souls.',
      offer: '* Free medium pizza of your choice on above order of INR 999/-.',
      image: '../../../../assets/images/home/fastfood.jpg',
      link: '/fast-food'
    },
    {
      title: 'Fruit Juices',
      tagline: 'Quench your thirst, feel alive!',
      offer: '* Buy 1 Get 1 on all small glass.',
      image: '../../../../assets/images/home/fruit-juice.jpg',
      link: '/fruit-juice'
    },
    {
      title: 'Snacks',
      tagline: 'Chakhna For Everyone',
      offer: '* Free chips on beers and alcohols above INR 999/-.',
      image: '../../../../assets/images/home/snacks.jpg',
      link: '/snacks'
    },
    {
      title: 'Cigarettes',
      tagline: 'Cigarette... Get Your Cigarette Here.',
      offer: '* INR 5 off on all products (pack)',
      image: '../../../../assets/images/home/cigarettes.jpg',
      link: '/cigarettes'
    }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  showSlide(index: number) {
    if (index < 0) index = this.slides.length - 1;
    if (index >= this.slides.length) index = 0;
    this.currentSlide = index;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.showSlide(this.currentSlide + 1);
    }, 4000);
  }

  navigateToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
