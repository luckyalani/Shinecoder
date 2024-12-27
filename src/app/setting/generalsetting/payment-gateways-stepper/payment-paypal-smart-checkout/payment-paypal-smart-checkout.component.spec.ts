import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPaypalSmartCheckoutComponent } from './payment-paypal-smart-checkout.component';

describe('PaymentPaypalSmartCheckoutComponent', () => {
  let component: PaymentPaypalSmartCheckoutComponent;
  let fixture: ComponentFixture<PaymentPaypalSmartCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentPaypalSmartCheckoutComponent]
    });
    fixture = TestBed.createComponent(PaymentPaypalSmartCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
