import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSeriesComponent } from './transaction-series.component';

describe('TransactionSeriesComponent', () => {
  let component: TransactionSeriesComponent;
  let fixture: ComponentFixture<TransactionSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionSeriesComponent]
    });
    fixture = TestBed.createComponent(TransactionSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
