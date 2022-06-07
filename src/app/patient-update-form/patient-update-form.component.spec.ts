import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientUpdateFormComponent} from './patient-update-form.component';

describe('PatientUpdateFormComponent', () => {
  let component: PatientUpdateFormComponent;
  let fixture: ComponentFixture<PatientUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
