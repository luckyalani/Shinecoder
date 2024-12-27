import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInstamojoComponent } from './payment-instamojo.component';

describe('PaymentInstamojoComponent', () => {
  let component: PaymentInstamojoComponent;
  let fixture: ComponentFixture<PaymentInstamojoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentInstamojoComponent]
    });
    fixture = TestBed.createComponent(PaymentInstamojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
