import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMollieComponent } from './payment-mollie.component';

describe('PaymentMollieComponent', () => {
  let component: PaymentMollieComponent;
  let fixture: ComponentFixture<PaymentMollieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMollieComponent]
    });
    fixture = TestBed.createComponent(PaymentMollieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
