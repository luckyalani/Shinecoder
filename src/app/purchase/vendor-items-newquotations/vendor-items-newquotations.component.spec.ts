import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsNewquotationsComponent } from './vendor-items-newquotations.component';

describe('VendorItemsNewquotationsComponent', () => {
  let component: VendorItemsNewquotationsComponent;
  let fixture: ComponentFixture<VendorItemsNewquotationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsNewquotationsComponent]
    });
    fixture = TestBed.createComponent(VendorItemsNewquotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
