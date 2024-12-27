import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountComponent } from './chart-of-account.component';

describe('ChartOfAccountComponent', () => {
  let component: ChartOfAccountComponent;
  let fixture: ComponentFixture<ChartOfAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartOfAccountComponent]
    });
    fixture = TestBed.createComponent(ChartOfAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
