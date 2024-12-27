import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPaypalComponent } from './payment-paypal.component';

describe('PaymentPaypalComponent', () => {
  let component: PaymentPaypalComponent;
  let fixture: ComponentFixture<PaymentPaypalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentPaypalComponent]
    });
    fixture = TestBed.createComponent(PaymentPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
