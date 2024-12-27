import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsPoNewpurchaseorderComponent } from './vendor-items-po-newpurchaseorder.component';

describe('VendorItemsPoNewpurchaseorderComponent', () => {
  let component: VendorItemsPoNewpurchaseorderComponent;
  let fixture: ComponentFixture<VendorItemsPoNewpurchaseorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsPoNewpurchaseorderComponent]
    });
    fixture = TestBed.createComponent(VendorItemsPoNewpurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
