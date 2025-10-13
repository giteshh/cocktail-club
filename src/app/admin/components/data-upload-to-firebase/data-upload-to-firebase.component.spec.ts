import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUploadToFirebaseComponent } from './data-upload-to-firebase.component';

describe('DataUploadToFirebaseComponent', () => {
  let component: DataUploadToFirebaseComponent;
  let fixture: ComponentFixture<DataUploadToFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataUploadToFirebaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataUploadToFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
