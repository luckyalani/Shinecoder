import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsPurchaseInvoiceComponent } from './vendor-items-purchase-invoice.component';

describe('VendorItemsPurchaseInvoiceComponent', () => {
  let component: VendorItemsPurchaseInvoiceComponent;
  let fixture: ComponentFixture<VendorItemsPurchaseInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsPurchaseInvoiceComponent]
    });
    fixture = TestBed.createComponent(VendorItemsPurchaseInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
