import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceStepperComponent } from './finance-stepper.component';

describe('FinanceStepperComponent', () => {
  let component: FinanceStepperComponent;
  let fixture: ComponentFixture<FinanceStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceStepperComponent]
    });
    fixture = TestBed.createComponent(FinanceStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
