import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStripeIdealComponent } from './payment-stripe-ideal.component';

describe('PaymentStripeIdealComponent', () => {
  let component: PaymentStripeIdealComponent;
  let fixture: ComponentFixture<PaymentStripeIdealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentStripeIdealComponent]
    });
    fixture = TestBed.createComponent(PaymentStripeIdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
