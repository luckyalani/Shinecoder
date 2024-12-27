import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingTabsComponent } from './accounting-tabs.component';

describe('AccountingTabsComponent', () => {
  let component: AccountingTabsComponent;
  let fixture: ComponentFixture<AccountingTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingTabsComponent]
    });
    fixture = TestBed.createComponent(AccountingTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
