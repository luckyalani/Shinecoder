import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCreditNotesComponent } from './finance-credit-notes.component';

describe('FinanceCreditNotesComponent', () => {
  let component: FinanceCreditNotesComponent;
  let fixture: ComponentFixture<FinanceCreditNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceCreditNotesComponent]
    });
    fixture = TestBed.createComponent(FinanceCreditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
