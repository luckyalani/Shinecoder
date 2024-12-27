import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorQuotationsComponent } from './vendor-quotations.component';

describe('VendorQuotationsComponent', () => {
  let component: VendorQuotationsComponent;
  let fixture: ComponentFixture<VendorQuotationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorQuotationsComponent]
    });
    fixture = TestBed.createComponent(VendorQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
