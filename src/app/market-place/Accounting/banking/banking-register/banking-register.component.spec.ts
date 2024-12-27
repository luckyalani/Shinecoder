import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingRegisterComponent } from './banking-register.component';

describe('BankingRegisterComponent', () => {
  let component: BankingRegisterComponent;
  let fixture: ComponentFixture<BankingRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingRegisterComponent]
    });
    fixture = TestBed.createComponent(BankingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
