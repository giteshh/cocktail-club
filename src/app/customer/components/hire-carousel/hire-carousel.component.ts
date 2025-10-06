import {Component, HostListener, OnInit} from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

@Component({
  selector: 'app-hire-carousel',
  templateUrl: './hire-carousel.component.html',
  styleUrls: ['./hire-carousel.component.css']
})
export class HireCarouselComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'Hire Chef',
      role: 'Skilled chefs serving up mouthwatering meals for your house party.',
      img: '../assets/images/home/hire/chef.jpg'
    },
    {
      name: 'Hire Waiters',
      role: 'Professional waitstaff delivering seamless service with style.',
      img: '../assets/images/home/hire/waiters.jpg'
    },
    {
      name: 'Hire Cleaning Services',
      role: 'Party cleanup pros who make the mess disappear.',
      img: '../assets/images/home/hire/cleaning-service.jpg'
    },
    {
      name: 'Hire DJ',
      role: 'Bring the beats home with DJs who know how to rock a house party.',
      img: '../assets/images/home/hire/dj.jpg'
    },
    {
      name: 'Rent Speaker',
      role: 'Powerful speakers to turn up the vibe in your living room or backyard.',
      img: '../assets/images/home/hire/rent-speaker.jpg'
    },
    {
      name: 'Rent Hookahs',
      role: 'Clouds of fun incoming—party mode: ON.',
      img: '../assets/images/home/hire/rent-hookah2.jpg'
    },
    {
      name: 'Rent Refrigerator',
      role: `Never Let your Beers and Cold drinks Go Warm Again!`,
      img: '../assets/images/home/hire/fridge.jpg'
    }
  ];

  currentIndex = 0;
  isAnimating = false;

  ngOnInit() {
    this.updateCarousel(0);
  }

  updateCarousel(newIndex: number) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    this.currentIndex = (newIndex + this.teamMembers.length) % this.teamMembers.length;

    setTimeout(() => (this.isAnimating = false), 800);
  }

  prev() {
    this.updateCarousel(this.currentIndex - 1);
  }

  next() {
    this.updateCarousel(this.currentIndex + 1);
  }

  goTo(index: number) {
    this.updateCarousel(index);
  }

  getCardClass(i: number): string {
    const offset = (i - this.currentIndex + this.teamMembers.length) % this.teamMembers.length;
    if (offset === 0) return 'center';
    if (offset === 1) return 'right-1';
    if (offset === 2) return 'right-2';
    if (offset === this.teamMembers.length - 1) return 'left-1';
    if (offset === this.teamMembers.length - 2) return 'left-2';
    return 'hidden';
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') this.prev();
    else if (event.key === 'ArrowRight') this.next();
  }

  // Touch navigation
  touchStartX = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(e: TouchEvent) {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = this.touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? this.next() : this.prev();
    }
  }
}
