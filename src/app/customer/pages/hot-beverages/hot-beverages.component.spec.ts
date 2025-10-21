import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotBeveragesComponent } from './hot-beverages.component';

describe('HotBeveragesComponent', () => {
  let component: HotBeveragesComponent;
  let fixture: ComponentFixture<HotBeveragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotBeveragesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotBeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
