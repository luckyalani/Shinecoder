import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingRulesComponent } from './banking-rules.component';

describe('BankingRulesComponent', () => {
  let component: BankingRulesComponent;
  let fixture: ComponentFixture<BankingRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingRulesComponent]
    });
    fixture = TestBed.createComponent(BankingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
