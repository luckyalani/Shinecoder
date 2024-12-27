import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesCategoryAddComponent } from './expenses-category-add.component';

describe('ExpensesCategoryAddComponent', () => {
  let component: ExpensesCategoryAddComponent;
  let fixture: ComponentFixture<ExpensesCategoryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesCategoryAddComponent]
    });
    fixture = TestBed.createComponent(ExpensesCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
