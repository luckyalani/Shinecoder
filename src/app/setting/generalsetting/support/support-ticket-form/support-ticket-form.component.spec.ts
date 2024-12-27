import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTicketFormComponent } from './support-ticket-form.component';

describe('SupportTicketFormComponent', () => {
  let component: SupportTicketFormComponent;
  let fixture: ComponentFixture<SupportTicketFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportTicketFormComponent]
    });
    fixture = TestBed.createComponent(SupportTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
