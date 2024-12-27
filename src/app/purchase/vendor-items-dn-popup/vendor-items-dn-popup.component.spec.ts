import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsDnPopupComponent } from './vendor-items-dn-popup.component';

describe('VendorItemsDnPopupComponent', () => {
  let component: VendorItemsDnPopupComponent;
  let fixture: ComponentFixture<VendorItemsDnPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsDnPopupComponent]
    });
    fixture = TestBed.createComponent(VendorItemsDnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
