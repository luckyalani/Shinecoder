import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDocumentFormatsComponent } from './pdf-document-formats.component';

describe('PdfDocumentFormatsComponent', () => {
  let component: PdfDocumentFormatsComponent;
  let fixture: ComponentFixture<PdfDocumentFormatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfDocumentFormatsComponent]
    });
    fixture = TestBed.createComponent(PdfDocumentFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
