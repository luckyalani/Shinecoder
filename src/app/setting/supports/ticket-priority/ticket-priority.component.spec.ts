import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPriorityComponent } from './ticket-priority.component';

describe('TicketPriorityComponent', () => {
  let component: TicketPriorityComponent;
  let fixture: ComponentFixture<TicketPriorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketPriorityComponent]
    });
    fixture = TestBed.createComponent(TicketPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
