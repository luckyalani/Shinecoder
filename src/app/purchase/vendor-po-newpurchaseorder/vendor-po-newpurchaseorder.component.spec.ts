import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPoNewpurchaseorderComponent } from './vendor-po-newpurchaseorder.component';

describe('VendorPoNewpurchaseorderComponent', () => {
  let component: VendorPoNewpurchaseorderComponent;
  let fixture: ComponentFixture<VendorPoNewpurchaseorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorPoNewpurchaseorderComponent]
    });
    fixture = TestBed.createComponent(VendorPoNewpurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
