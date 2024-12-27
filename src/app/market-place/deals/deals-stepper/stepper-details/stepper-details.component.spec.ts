import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperDetailsComponent } from './stepper-details.component';

describe('StepperDetailsComponent', () => {
  let component: StepperDetailsComponent;
  let fixture: ComponentFixture<StepperDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperDetailsComponent]
    });
    fixture = TestBed.createComponent(StepperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
