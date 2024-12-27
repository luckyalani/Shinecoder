import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseVendorMultipletabPagesComponent } from './purchase-vendor-multipletab-pages.component';

describe('PurchaseVendorMultipletabPagesComponent', () => {
  let component: PurchaseVendorMultipletabPagesComponent;
  let fixture: ComponentFixture<PurchaseVendorMultipletabPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseVendorMultipletabPagesComponent]
    });
    fixture = TestBed.createComponent(PurchaseVendorMultipletabPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
