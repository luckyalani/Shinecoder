import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsPiNewpurchaseinvoiceComponent } from './vendor-items-pi-newpurchaseinvoice.component';

describe('VendorItemsPiNewpurchaseinvoiceComponent', () => {
  let component: VendorItemsPiNewpurchaseinvoiceComponent;
  let fixture: ComponentFixture<VendorItemsPiNewpurchaseinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsPiNewpurchaseinvoiceComponent]
    });
    fixture = TestBed.createComponent(VendorItemsPiNewpurchaseinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
