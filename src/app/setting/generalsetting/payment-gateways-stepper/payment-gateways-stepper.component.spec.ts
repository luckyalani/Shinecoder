import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGatewaysStepperComponent } from './payment-gateways-stepper.component';

describe('PaymentGatewaysStepperComponent', () => {
  let component: PaymentGatewaysStepperComponent;
  let fixture: ComponentFixture<PaymentGatewaysStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentGatewaysStepperComponent]
    });
    fixture = TestBed.createComponent(PaymentGatewaysStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
