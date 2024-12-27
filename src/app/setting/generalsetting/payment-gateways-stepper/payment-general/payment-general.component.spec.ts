import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGeneralComponent } from './payment-general.component';

describe('PaymentGeneralComponent', () => {
  let component: PaymentGeneralComponent;
  let fixture: ComponentFixture<PaymentGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentGeneralComponent]
    });
    fixture = TestBed.createComponent(PaymentGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
