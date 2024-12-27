import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPaymentsComponent } from './vendor-payments.component';

describe('VendorPaymentsComponent', () => {
  let component: VendorPaymentsComponent;
  let fixture: ComponentFixture<VendorPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorPaymentsComponent]
    });
    fixture = TestBed.createComponent(VendorPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
