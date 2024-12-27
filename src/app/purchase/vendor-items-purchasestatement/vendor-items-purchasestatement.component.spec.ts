import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsPurchasestatementComponent } from './vendor-items-purchasestatement.component';

describe('VendorItemsPurchasestatementComponent', () => {
  let component: VendorItemsPurchasestatementComponent;
  let fixture: ComponentFixture<VendorItemsPurchasestatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsPurchasestatementComponent]
    });
    fixture = TestBed.createComponent(VendorItemsPurchasestatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
