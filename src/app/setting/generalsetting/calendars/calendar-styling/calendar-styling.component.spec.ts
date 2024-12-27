import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarStylingComponent } from './calendar-styling.component';

describe('CalendarStylingComponent', () => {
  let component: CalendarStylingComponent;
  let fixture: ComponentFixture<CalendarStylingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarStylingComponent]
    });
    fixture = TestBed.createComponent(CalendarStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
