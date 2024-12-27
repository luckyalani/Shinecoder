import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderTabComponent } from './reminder-tab.component';

describe('ReminderTabComponent', () => {
  let component: ReminderTabComponent;
  let fixture: ComponentFixture<ReminderTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReminderTabComponent]
    });
    fixture = TestBed.createComponent(ReminderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
