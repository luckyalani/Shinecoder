import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseVendorItemsComponent } from './purchase-vendor-items.component';

describe('PurchaseVendorItemsComponent', () => {
  let component: PurchaseVendorItemsComponent;
  let fixture: ComponentFixture<PurchaseVendorItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseVendorItemsComponent]
    });
    fixture = TestBed.createComponent(PurchaseVendorItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
