import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportChartOfAccountComponent } from './import-chart-of-account.component';

describe('ImportChartOfAccountComponent', () => {
  let component: ImportChartOfAccountComponent;
  let fixture: ComponentFixture<ImportChartOfAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportChartOfAccountComponent]
    });
    fixture = TestBed.createComponent(ImportChartOfAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
