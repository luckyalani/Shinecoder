import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHistoryComponent } from './account-history.component';

describe('AccountHistoryComponent', () => {
  let component: AccountHistoryComponent;
  let fixture: ComponentFixture<AccountHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountHistoryComponent]
    });
    fixture = TestBed.createComponent(AccountHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
