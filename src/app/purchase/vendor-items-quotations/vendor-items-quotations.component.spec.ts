import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsQuotationsComponent } from './vendor-items-quotations.component';

describe('VendorItemsQuotationsComponent', () => {
  let component: VendorItemsQuotationsComponent;
  let fixture: ComponentFixture<VendorItemsQuotationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsQuotationsComponent]
    });
    fixture = TestBed.createComponent(VendorItemsQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
