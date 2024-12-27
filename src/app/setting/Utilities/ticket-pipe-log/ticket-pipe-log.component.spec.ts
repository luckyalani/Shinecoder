import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPipeLogComponent } from './ticket-pipe-log.component';

describe('TicketPipeLogComponent', () => {
  let component: TicketPipeLogComponent;
  let fixture: ComponentFixture<TicketPipeLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketPipeLogComponent]
    });
    fixture = TestBed.createComponent(TicketPipeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
