import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsStepperComponent } from './deals-stepper.component';

describe('DealsStepperComponent', () => {
  let component: DealsStepperComponent;
  let fixture: ComponentFixture<DealsStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealsStepperComponent]
    });
    fixture = TestBed.createComponent(DealsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
