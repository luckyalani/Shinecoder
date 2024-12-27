import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRequirementsPopupComponent } from './candidate-requirements-popup.component';

describe('CandidateRequirementsPopupComponent', () => {
  let component: CandidateRequirementsPopupComponent;
  let fixture: ComponentFixture<CandidateRequirementsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateRequirementsPopupComponent]
    });
    fixture = TestBed.createComponent(CandidateRequirementsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
