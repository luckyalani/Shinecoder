import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsExpensesComponent } from './vendor-items-expenses.component';

describe('VendorItemsExpensesComponent', () => {
  let component: VendorItemsExpensesComponent;
  let fixture: ComponentFixture<VendorItemsExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsExpensesComponent]
    });
    fixture = TestBed.createComponent(VendorItemsExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
