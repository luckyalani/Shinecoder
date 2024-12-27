import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBtnBudgetComponent } from './next-btn-budget.component';

describe('NextBtnBudgetComponent', () => {
  let component: NextBtnBudgetComponent;
  let fixture: ComponentFixture<NextBtnBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextBtnBudgetComponent]
    });
    fixture = TestBed.createComponent(NextBtnBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
