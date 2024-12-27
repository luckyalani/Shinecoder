import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBudgetComponent } from './import-budget.component';

describe('ImportBudgetComponent', () => {
  let component: ImportBudgetComponent;
  let fixture: ComponentFixture<ImportBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportBudgetComponent]
    });
    fixture = TestBed.createComponent(ImportBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
