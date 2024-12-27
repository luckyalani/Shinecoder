import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsEditStepperComponent } from './leads-edit-stepper.component';

describe('LeadsEditStepperComponent', () => {
  let component: LeadsEditStepperComponent;
  let fixture: ComponentFixture<LeadsEditStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsEditStepperComponent]
    });
    fixture = TestBed.createComponent(LeadsEditStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
