import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadManagerUpdateMeetingDetailsComponent } from './lead-manager-update-meeting-details.component';

describe('LeadManagerUpdateMeetingDetailsComponent', () => {
  let component: LeadManagerUpdateMeetingDetailsComponent;
  let fixture: ComponentFixture<LeadManagerUpdateMeetingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadManagerUpdateMeetingDetailsComponent]
    });
    fixture = TestBed.createComponent(LeadManagerUpdateMeetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
