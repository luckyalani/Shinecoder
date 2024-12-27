import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPurchaseStatementComponent } from './vendor-purchase-statement.component';

describe('VendorPurchaseStatementComponent', () => {
  let component: VendorPurchaseStatementComponent;
  let fixture: ComponentFixture<VendorPurchaseStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorPurchaseStatementComponent]
    });
    fixture = TestBed.createComponent(VendorPurchaseStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
