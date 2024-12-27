import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankingRulesComponent } from './add-banking-rules.component';

describe('AddBankingRulesComponent', () => {
  let component: AddBankingRulesComponent;
  let fixture: ComponentFixture<AddBankingRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBankingRulesComponent]
    });
    fixture = TestBed.createComponent(AddBankingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
