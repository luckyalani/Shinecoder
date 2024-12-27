import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorExpensesRecordExpenseComponent } from './vendor-expenses-record-expense.component';

describe('VendorExpensesRecordExpenseComponent', () => {
  let component: VendorExpensesRecordExpenseComponent;
  let fixture: ComponentFixture<VendorExpensesRecordExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorExpensesRecordExpenseComponent]
    });
    fixture = TestBed.createComponent(VendorExpensesRecordExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
