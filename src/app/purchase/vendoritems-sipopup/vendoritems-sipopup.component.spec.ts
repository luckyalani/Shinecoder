import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoritemsSIpopupComponent } from './vendoritems-sipopup.component';

describe('VendoritemsSIpopupComponent', () => {
  let component: VendoritemsSIpopupComponent;
  let fixture: ComponentFixture<VendoritemsSIpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendoritemsSIpopupComponent]
    });
    fixture = TestBed.createComponent(VendoritemsSIpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
