import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceInvoicesComponent } from './finance-invoices.component';

describe('FinanceInvoicesComponent', () => {
  let component: FinanceInvoicesComponent;
  let fixture: ComponentFixture<FinanceInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceInvoicesComponent]
    });
    fixture = TestBed.createComponent(FinanceInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
