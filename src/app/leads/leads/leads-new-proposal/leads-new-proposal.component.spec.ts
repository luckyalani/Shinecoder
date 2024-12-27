import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsNewProposalComponent } from './leads-new-proposal.component';

describe('LeadsNewProposalComponent', () => {
  let component: LeadsNewProposalComponent;
  let fixture: ComponentFixture<LeadsNewProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsNewProposalComponent]
    });
    fixture = TestBed.createComponent(LeadsNewProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
