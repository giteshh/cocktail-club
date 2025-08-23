import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireCarouselComponent } from './hire-carousel.component';

describe('HireCarouselComponent', () => {
  let component: HireCarouselComponent;
  let fixture: ComponentFixture<HireCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
