import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSecondcontactComponent } from './vendor-secondcontact.component';

describe('VendorSecondcontactComponent', () => {
  let component: VendorSecondcontactComponent;
  let fixture: ComponentFixture<VendorSecondcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorSecondcontactComponent]
    });
    fixture = TestBed.createComponent(VendorSecondcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
