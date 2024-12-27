import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceProposalsComponent } from './finance-proposals.component';

describe('FinanceProposalsComponent', () => {
  let component: FinanceProposalsComponent;
  let fixture: ComponentFixture<FinanceProposalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceProposalsComponent]
    });
    fixture = TestBed.createComponent(FinanceProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
