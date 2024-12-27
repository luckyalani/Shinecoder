import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceEstimatesComponent } from './finance-estimates.component';

describe('FinanceEstimatesComponent', () => {
  let component: FinanceEstimatesComponent;
  let fixture: ComponentFixture<FinanceEstimatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceEstimatesComponent]
    });
    fixture = TestBed.createComponent(FinanceEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
