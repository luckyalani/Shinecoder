import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseVendorTablepageComponent } from './purchase-vendor-tablepage.component';

describe('PurchaseVendorTablepageComponent', () => {
  let component: PurchaseVendorTablepageComponent;
  let fixture: ComponentFixture<PurchaseVendorTablepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseVendorTablepageComponent]
    });
    fixture = TestBed.createComponent(PurchaseVendorTablepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
