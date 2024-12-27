import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsContactseditComponent } from './vendor-items-contactsedit.component';

describe('VendorItemsContactseditComponent', () => {
  let component: VendorItemsContactseditComponent;
  let fixture: ComponentFixture<VendorItemsContactseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsContactseditComponent]
    });
    fixture = TestBed.createComponent(VendorItemsContactseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
