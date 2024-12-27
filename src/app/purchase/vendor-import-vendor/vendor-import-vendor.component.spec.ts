import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorImportVendorComponent } from './vendor-import-vendor.component';

describe('VendorImportVendorComponent', () => {
  let component: VendorImportVendorComponent;
  let fixture: ComponentFixture<VendorImportVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorImportVendorComponent]
    });
    fixture = TestBed.createComponent(VendorImportVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
