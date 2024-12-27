import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPiNewpurchaseinvoiceComponent } from './vendor-pi-newpurchaseinvoice.component';

describe('VendorPiNewpurchaseinvoiceComponent', () => {
  let component: VendorPiNewpurchaseinvoiceComponent;
  let fixture: ComponentFixture<VendorPiNewpurchaseinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorPiNewpurchaseinvoiceComponent]
    });
    fixture = TestBed.createComponent(VendorPiNewpurchaseinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
