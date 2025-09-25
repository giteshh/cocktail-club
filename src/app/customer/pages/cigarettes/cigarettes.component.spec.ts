import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigarettesComponent } from './cigarettes.component';

describe('CigarettesComponent', () => {
  let component: CigarettesComponent;
  let fixture: ComponentFixture<CigarettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CigarettesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CigarettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
