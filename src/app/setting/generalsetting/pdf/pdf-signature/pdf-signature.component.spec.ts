import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSignatureComponent } from './pdf-signature.component';

describe('PdfSignatureComponent', () => {
  let component: PdfSignatureComponent;
  let fixture: ComponentFixture<PdfSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfSignatureComponent]
    });
    fixture = TestBed.createComponent(PdfSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
