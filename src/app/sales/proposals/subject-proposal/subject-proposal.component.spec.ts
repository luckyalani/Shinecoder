import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectProposalComponent } from './subject-proposal.component';

describe('SubjectProposalComponent', () => {
  let component: SubjectProposalComponent;
  let fixture: ComponentFixture<SubjectProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectProposalComponent]
    });
    fixture = TestBed.createComponent(SubjectProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
