import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeDeliverComponent } from './how-we-deliver.component';

describe('HowWeDeliverComponent', () => {
  let component: HowWeDeliverComponent;
  let fixture: ComponentFixture<HowWeDeliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeDeliverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
