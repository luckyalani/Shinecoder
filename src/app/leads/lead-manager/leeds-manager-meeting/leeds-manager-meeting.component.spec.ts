import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeedsManagerMeetingComponent } from './leeds-manager-meeting.component';

describe('LeedsManagerMeetingComponent', () => {
  let component: LeedsManagerMeetingComponent;
  let fixture: ComponentFixture<LeedsManagerMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeedsManagerMeetingComponent]
    });
    fixture = TestBed.createComponent(LeedsManagerMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
