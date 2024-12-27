import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetReminderComponent } from './set-reminder.component';

describe('SetReminderComponent', () => {
  let component: SetReminderComponent;
  let fixture: ComponentFixture<SetReminderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetReminderComponent]
    });
    fixture = TestBed.createComponent(SetReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});