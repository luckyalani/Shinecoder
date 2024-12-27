import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTwoCheckoutComponent } from './payment-two-checkout.component';

describe('PaymentTwoCheckoutComponent', () => {
  let component: PaymentTwoCheckoutComponent;
  let fixture: ComponentFixture<PaymentTwoCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentTwoCheckoutComponent]
    });
    fixture = TestBed.createComponent(PaymentTwoCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
