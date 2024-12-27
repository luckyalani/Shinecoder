import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupReminderTabComponent } from './popup-reminder-tab.component';

describe('PopupReminderTabComponent', () => {
  let component: PopupReminderTabComponent;
  let fixture: ComponentFixture<PopupReminderTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupReminderTabComponent]
    });
    fixture = TestBed.createComponent(PopupReminderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
