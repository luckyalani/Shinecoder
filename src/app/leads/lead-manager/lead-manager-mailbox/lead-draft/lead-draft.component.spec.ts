import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDraftComponent } from './lead-draft.component';

describe('LeadDraftComponent', () => {
  let component: LeadDraftComponent;
  let fixture: ComponentFixture<LeadDraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadDraftComponent]
    });
    fixture = TestBed.createComponent(LeadDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
