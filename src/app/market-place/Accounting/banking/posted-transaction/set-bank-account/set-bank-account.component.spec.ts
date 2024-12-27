import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBankAccountComponent } from './set-bank-account.component';

describe('SetBankAccountComponent', () => {
  let component: SetBankAccountComponent;
  let fixture: ComponentFixture<SetBankAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetBankAccountComponent]
    });
    fixture = TestBed.createComponent(SetBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
