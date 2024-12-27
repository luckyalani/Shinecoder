import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPurchaseinvoiceComponent } from './vendor-purchaseinvoice.component';

describe('VendorPurchaseinvoiceComponent', () => {
  let component: VendorPurchaseinvoiceComponent;
  let fixture: ComponentFixture<VendorPurchaseinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorPurchaseinvoiceComponent]
    });
    fixture = TestBed.createComponent(VendorPurchaseinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
