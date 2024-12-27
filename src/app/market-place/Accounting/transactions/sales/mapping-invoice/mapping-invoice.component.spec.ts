import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingInvoiceComponent } from './mapping-invoice.component';

describe('MappingInvoiceComponent', () => {
  let component: MappingInvoiceComponent;
  let fixture: ComponentFixture<MappingInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MappingInvoiceComponent]
    });
    fixture = TestBed.createComponent(MappingInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
