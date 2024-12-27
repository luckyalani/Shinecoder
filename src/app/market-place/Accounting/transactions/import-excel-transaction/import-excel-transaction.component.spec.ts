import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExcelTransactionComponent } from './import-excel-transaction.component';

describe('ImportExcelTransactionComponent', () => {
  let component: ImportExcelTransactionComponent;
  let fixture: ComponentFixture<ImportExcelTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportExcelTransactionComponent]
    });
    fixture = TestBed.createComponent(ImportExcelTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
