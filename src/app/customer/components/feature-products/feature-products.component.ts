import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {Observer} from 'gsap/Observer';
import {featureProducts} from "../../../../assets/data/feature-products";

gsap.registerPlugin(Observer);

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.css']
})
export class FeatureProductsComponent implements AfterViewInit {
  @ViewChild('carousel') carouselRef!: ElementRef;

  featureProducts = featureProducts;

  progress = {value: 0};
  radius = 350;

  ngAfterViewInit(): void {
    const carousel: HTMLElement = this.carouselRef.nativeElement;
    const images = carousel.querySelectorAll<HTMLElement>('.carousel-image');

    Observer.create({
      target: carousel,
      type: 'wheel,pointer',
      onPress: () => {
        carousel.style.cursor = 'grabbing';
      },
      onRelease: () => {
        carousel.style.cursor = 'grab';
      },
      onChange: (self) => {
        gsap.killTweensOf(this.progress);
        const p =
          self.event.type === 'wheel'
            ? self.deltaY * -0.0005
            : self.deltaX * 0.05;

        gsap.to(this.progress, {
          duration: 2,
          ease: 'power4.out',
          value: `+=${p}`,
        });
      },
    });

    const animate = () => {
      images.forEach((image, index) => {
        const theta = index / this.featureProducts.length - this.progress.value;
        const x = -Math.sin(theta * Math.PI * 2) * this.radius;
        const y = Math.cos(theta * Math.PI * 2) * this.radius;
        const zIndex = Math.round(Math.cos(theta * Math.PI * 2) * 100);

        image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta}deg)`;
        image.style.zIndex = zIndex.toString();

        // OPTIONAL: Fade out distant items
        const opacity = Math.max(0.3, y / this.radius); // closer = more visible
        image.style.opacity = opacity.toString();
      });
    };

    gsap.ticker.add(animate);
  }
}
