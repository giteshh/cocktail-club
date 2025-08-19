import {AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-animated-product-carousel',
  templateUrl: './animated-product-carousel.component.html',
  styleUrls: ['./animated-product-carousel.component.css'],
  standalone: false
})
export class AnimatedProductCarouselComponent implements AfterViewInit {
  @ViewChild('main') main!: ElementRef<HTMLElement>;
  @ViewChildren('btn') btns!: QueryList<ElementRef>;
  @ViewChild('slideRow') slideRow!: ElementRef<HTMLDivElement>;

  currentIndex = 0;

  totalSlides = 8;
  buttons = Array(this.totalSlides).fill(0);

  ngAfterViewInit(): void {
    this.updateSlide();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateSlide();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.updateSlide();
  }

  updateSlide(): void {
    if (!this.main || !this.slideRow) return;

    const mainWidth = this.main.nativeElement.offsetWidth;
    const translateValue = this.currentIndex * -mainWidth;

    this.slideRow.nativeElement.style.transform = `translateX(${translateValue}px)`;

    this.btns.forEach((btn, index) => {
      if (index === this.currentIndex) {
        btn.nativeElement.classList.add('active');
      } else {
        btn.nativeElement.classList.remove('active');
      }
    });
  }

  navigateToTop() {
    window.scrollTo(0, 0);
  }

}
