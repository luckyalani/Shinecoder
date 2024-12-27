import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeedsManagerMeetingDetailComponent } from './leeds-manager-meeting-detail.component';

describe('LeedsManagerMeetingDetailComponent', () => {
  let component: LeedsManagerMeetingDetailComponent;
  let fixture: ComponentFixture<LeedsManagerMeetingDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeedsManagerMeetingDetailComponent]
    });
    fixture = TestBed.createComponent(LeedsManagerMeetingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
