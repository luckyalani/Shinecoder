import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsRecordexpenseComponent } from './vendor-items-recordexpense.component';

describe('VendorItemsRecordexpenseComponent', () => {
  let component: VendorItemsRecordexpenseComponent;
  let fixture: ComponentFixture<VendorItemsRecordexpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsRecordexpenseComponent]
    });
    fixture = TestBed.createComponent(VendorItemsRecordexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
