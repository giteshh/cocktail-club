import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdDrinkComponent } from './cold-drink.component';

describe('ColdDrinkComponent', () => {
  let component: ColdDrinkComponent;
  let fixture: ComponentFixture<ColdDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
