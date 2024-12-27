import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesCategoriesComponent } from './expenses-categories.component';

describe('ExpensesCategoriesComponent', () => {
  let component: ExpensesCategoriesComponent;
  let fixture: ComponentFixture<ExpensesCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesCategoriesComponent]
    });
    fixture = TestBed.createComponent(ExpensesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
