import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsContactspopupComponent } from './vendor-items-contactspopup.component';

describe('VendorItemsContactspopupComponent', () => {
  let component: VendorItemsContactspopupComponent;
  let fixture: ComponentFixture<VendorItemsContactspopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsContactspopupComponent]
    });
    fixture = TestBed.createComponent(VendorItemsContactspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
