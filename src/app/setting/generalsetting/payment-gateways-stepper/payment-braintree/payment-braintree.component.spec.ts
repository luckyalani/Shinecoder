import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBraintreeComponent } from './payment-braintree.component';

describe('PaymentBraintreeComponent', () => {
  let component: PaymentBraintreeComponent;
  let fixture: ComponentFixture<PaymentBraintreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentBraintreeComponent]
    });
    fixture = TestBed.createComponent(PaymentBraintreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
