import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordExpensesComponent } from './record-expenses.component';

describe('RecordExpensesComponent', () => {
  let component: RecordExpensesComponent;
  let fixture: ComponentFixture<RecordExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordExpensesComponent]
    });
    fixture = TestBed.createComponent(RecordExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
