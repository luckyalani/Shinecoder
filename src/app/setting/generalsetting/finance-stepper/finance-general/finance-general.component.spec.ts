import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceGeneralComponent } from './finance-general.component';

describe('FinanceGeneralComponent', () => {
  let component: FinanceGeneralComponent;
  let fixture: ComponentFixture<FinanceGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceGeneralComponent]
    });
    fixture = TestBed.createComponent(FinanceGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
