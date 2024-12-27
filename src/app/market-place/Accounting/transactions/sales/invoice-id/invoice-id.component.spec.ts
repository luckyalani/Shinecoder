import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIdComponent } from './invoice-id.component';

describe('InvoiceIdComponent', () => {
  let component: InvoiceIdComponent;
  let fixture: ComponentFixture<InvoiceIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceIdComponent]
    });
    fixture = TestBed.createComponent(InvoiceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
