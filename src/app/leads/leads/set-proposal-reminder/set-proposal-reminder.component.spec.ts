import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProposalReminderComponent } from './set-proposal-reminder.component';

describe('SetProposalReminderComponent', () => {
  let component: SetProposalReminderComponent;
  let fixture: ComponentFixture<SetProposalReminderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetProposalReminderComponent]
    });
    fixture = TestBed.createComponent(SetProposalReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
