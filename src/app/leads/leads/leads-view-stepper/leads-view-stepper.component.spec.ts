import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsViewStepperComponent } from './leads-view-stepper.component';

describe('LeadsViewStepperComponent', () => {
  let component: LeadsViewStepperComponent;
  let fixture: ComponentFixture<LeadsViewStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsViewStepperComponent]
    });
    fixture = TestBed.createComponent(LeadsViewStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
