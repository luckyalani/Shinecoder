import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseVendorpageComponent } from './purchase-vendorpage.component';

describe('PurchaseVendorpageComponent', () => {
  let component: PurchaseVendorpageComponent;
  let fixture: ComponentFixture<PurchaseVendorpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseVendorpageComponent]
    });
    fixture = TestBed.createComponent(PurchaseVendorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
