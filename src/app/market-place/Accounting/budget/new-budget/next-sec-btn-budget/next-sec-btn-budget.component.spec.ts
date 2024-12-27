import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSecBtnBudgetComponent } from './next-sec-btn-budget.component';

describe('NextSecBtnBudgetComponent', () => {
  let component: NextSecBtnBudgetComponent;
  let fixture: ComponentFixture<NextSecBtnBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextSecBtnBudgetComponent]
    });
    fixture = TestBed.createComponent(NextSecBtnBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
