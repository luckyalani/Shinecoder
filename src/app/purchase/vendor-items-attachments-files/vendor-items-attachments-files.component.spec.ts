import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsAttachmentsFilesComponent } from './vendor-items-attachments-files.component';

describe('VendorItemsAttachmentsFilesComponent', () => {
  let component: VendorItemsAttachmentsFilesComponent;
  let fixture: ComponentFixture<VendorItemsAttachmentsFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsAttachmentsFilesComponent]
    });
    fixture = TestBed.createComponent(VendorItemsAttachmentsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
