import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailTypeComponent } from './account-detail-type.component';

describe('AccountDetailTypeComponent', () => {
  let component: AccountDetailTypeComponent;
  let fixture: ComponentFixture<AccountDetailTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountDetailTypeComponent]
    });
    fixture = TestBed.createComponent(AccountDetailTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
