import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalComponent } from './new-proposal.component';

describe('NewProposalComponent', () => {
  let component: NewProposalComponent;
  let fixture: ComponentFixture<NewProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProposalComponent]
    });
    fixture = TestBed.createComponent(NewProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
