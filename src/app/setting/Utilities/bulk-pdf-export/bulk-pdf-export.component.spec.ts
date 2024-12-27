import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkPdfExportComponent } from './bulk-pdf-export.component';

describe('BulkPdfExportComponent', () => {
  let component: BulkPdfExportComponent;
  let fixture: ComponentFixture<BulkPdfExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkPdfExportComponent]
    });
    fixture = TestBed.createComponent(BulkPdfExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
