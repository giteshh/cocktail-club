import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyEssentialsComponent } from './party-essentials.component';

describe('PartyEssentialsComponent', () => {
  let component: PartyEssentialsComponent;
  let fixture: ComponentFixture<PartyEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyEssentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
