import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPayuMoneyComponent } from './payment-payu-money.component';

describe('PaymentPayuMoneyComponent', () => {
  let component: PaymentPayuMoneyComponent;
  let fixture: ComponentFixture<PaymentPayuMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentPayuMoneyComponent]
    });
    fixture = TestBed.createComponent(PaymentPayuMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
