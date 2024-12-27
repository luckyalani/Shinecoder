import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStripeCheckoutComponent } from './payment-stripe-checkout.component';

describe('PaymentStripeCheckoutComponent', () => {
  let component: PaymentStripeCheckoutComponent;
  let fixture: ComponentFixture<PaymentStripeCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentStripeCheckoutComponent]
    });
    fixture = TestBed.createComponent(PaymentStripeCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
