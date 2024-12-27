import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChartOfAccountComponent } from './add-chart-of-account.component';

describe('AddChartOfAccountComponent', () => {
  let component: AddChartOfAccountComponent;
  let fixture: ComponentFixture<AddChartOfAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChartOfAccountComponent]
    });
    fixture = TestBed.createComponent(AddChartOfAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
