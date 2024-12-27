import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsEditProposalComponent } from './leads-edit-proposal.component';

describe('LeadsEditProposalComponent', () => {
  let component: LeadsEditProposalComponent;
  let fixture: ComponentFixture<LeadsEditProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsEditProposalComponent]
    });
    fixture = TestBed.createComponent(LeadsEditProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
