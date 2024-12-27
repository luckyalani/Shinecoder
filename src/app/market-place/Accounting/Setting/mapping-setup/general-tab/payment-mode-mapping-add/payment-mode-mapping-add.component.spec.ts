import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentModeMappingAddComponent } from './payment-mode-mapping-add.component';

describe('PaymentModeMappingAddComponent', () => {
  let component: PaymentModeMappingAddComponent;
  let fixture: ComponentFixture<PaymentModeMappingAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentModeMappingAddComponent]
    });
    fixture = TestBed.createComponent(PaymentModeMappingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
