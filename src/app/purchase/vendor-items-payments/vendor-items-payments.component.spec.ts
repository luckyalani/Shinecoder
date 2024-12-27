import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsPaymentsComponent } from './vendor-items-payments.component';

describe('VendorItemsPaymentsComponent', () => {
  let component: VendorItemsPaymentsComponent;
  let fixture: ComponentFixture<VendorItemsPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsPaymentsComponent]
    });
    fixture = TestBed.createComponent(VendorItemsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
