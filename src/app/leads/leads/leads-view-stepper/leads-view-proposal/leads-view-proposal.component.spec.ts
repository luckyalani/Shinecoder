import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsViewProposalComponent } from './leads-view-proposal.component';

describe('LeadsViewProposalComponent', () => {
  let component: LeadsViewProposalComponent;
  let fixture: ComponentFixture<LeadsViewProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsViewProposalComponent]
    });
    fixture = TestBed.createComponent(LeadsViewProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
