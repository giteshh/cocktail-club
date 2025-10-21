import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsOrHireComponent } from './rentals-or-hire.component';

describe('RentalsOrHireComponent', () => {
  let component: RentalsOrHireComponent;
  let fixture: ComponentFixture<RentalsOrHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalsOrHireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalsOrHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
