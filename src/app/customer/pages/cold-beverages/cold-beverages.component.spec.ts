import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdBeveragesComponent } from './cold-beverages.component';

describe('ColdBeveragesComponent', () => {
  let component: ColdBeveragesComponent;
  let fixture: ComponentFixture<ColdBeveragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdBeveragesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdBeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
