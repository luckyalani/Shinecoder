import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAttachmentfilesComponent } from './vendor-attachmentfiles.component';

describe('VendorAttachmentfilesComponent', () => {
  let component: VendorAttachmentfilesComponent;
  let fixture: ComponentFixture<VendorAttachmentfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorAttachmentfilesComponent]
    });
    fixture = TestBed.createComponent(VendorAttachmentfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
