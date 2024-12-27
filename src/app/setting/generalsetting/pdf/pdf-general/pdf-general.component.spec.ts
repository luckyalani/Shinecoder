import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfGeneralComponent } from './pdf-general.component';

describe('PdfGeneralComponent', () => {
  let component: PdfGeneralComponent;
  let fixture: ComponentFixture<PdfGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfGeneralComponent]
    });
    fixture = TestBed.createComponent(PdfGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
