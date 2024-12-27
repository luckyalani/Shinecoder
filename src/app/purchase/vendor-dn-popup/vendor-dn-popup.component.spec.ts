import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDnPopupComponent } from './vendor-dn-popup.component';

describe('VendorDnPopupComponent', () => {
  let component: VendorDnPopupComponent;
  let fixture: ComponentFixture<VendorDnPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorDnPopupComponent]
    });
    fixture = TestBed.createComponent(VendorDnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
