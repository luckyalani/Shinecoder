import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsViewNewProposalComponent } from './leads-view-new-proposal.component';

describe('LeadsViewNewProposalComponent', () => {
  let component: LeadsViewNewProposalComponent;
  let fixture: ComponentFixture<LeadsViewNewProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsViewNewProposalComponent]
    });
    fixture = TestBed.createComponent(LeadsViewNewProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
