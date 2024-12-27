import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentModeComponent } from './add-payment-mode.component';

describe('AddPaymentModeComponent', () => {
  let component: AddPaymentModeComponent;
  let fixture: ComponentFixture<AddPaymentModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPaymentModeComponent]
    });
    fixture = TestBed.createComponent(AddPaymentModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
