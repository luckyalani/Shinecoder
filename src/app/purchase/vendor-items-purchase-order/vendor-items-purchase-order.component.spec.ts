import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsPurchaseOrderComponent } from './vendor-items-purchase-order.component';

describe('VendorItemsPurchaseOrderComponent', () => {
  let component: VendorItemsPurchaseOrderComponent;
  let fixture: ComponentFixture<VendorItemsPurchaseOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsPurchaseOrderComponent]
    });
    fixture = TestBed.createComponent(VendorItemsPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
