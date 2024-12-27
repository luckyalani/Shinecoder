import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorNewquotationsComponent } from './vendor-newquotations.component';

describe('VendorNewquotationsComponent', () => {
  let component: VendorNewquotationsComponent;
  let fixture: ComponentFixture<VendorNewquotationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorNewquotationsComponent]
    });
    fixture = TestBed.createComponent(VendorNewquotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
