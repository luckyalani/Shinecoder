import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAuthorizeComponent } from './payment-authorize.component';

describe('PaymentAuthorizeComponent', () => {
  let component: PaymentAuthorizeComponent;
  let fixture: ComponentFixture<PaymentAuthorizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentAuthorizeComponent]
    });
    fixture = TestBed.createComponent(PaymentAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
