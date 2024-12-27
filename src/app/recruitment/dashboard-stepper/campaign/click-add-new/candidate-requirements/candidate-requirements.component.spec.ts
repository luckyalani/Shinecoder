import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRequirementsComponent } from './candidate-requirements.component';

describe('CandidateRequirementsComponent', () => {
  let component: CandidateRequirementsComponent;
  let fixture: ComponentFixture<CandidateRequirementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateRequirementsComponent]
    });
    fixture = TestBed.createComponent(CandidateRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
