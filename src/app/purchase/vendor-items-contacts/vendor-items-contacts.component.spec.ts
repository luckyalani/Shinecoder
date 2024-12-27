import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsContactsComponent } from './vendor-items-contacts.component';

describe('VendorItemsContactsComponent', () => {
  let component: VendorItemsContactsComponent;
  let fixture: ComponentFixture<VendorItemsContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsContactsComponent]
    });
    fixture = TestBed.createComponent(VendorItemsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
