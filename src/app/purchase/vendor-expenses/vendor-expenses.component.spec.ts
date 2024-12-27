import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorExpensesComponent } from './vendor-expenses.component';

describe('VendorExpensesComponent', () => {
  let component: VendorExpensesComponent;
  let fixture: ComponentFixture<VendorExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorExpensesComponent]
    });
    fixture = TestBed.createComponent(VendorExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
