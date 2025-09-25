import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentSpeakerComponent } from './rent-speaker.component';

describe('RentSpeakerComponent', () => {
  let component: RentSpeakerComponent;
  let fixture: ComponentFixture<RentSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentSpeakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
