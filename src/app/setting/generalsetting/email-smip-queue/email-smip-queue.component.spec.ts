import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSmipQueueComponent } from './email-smip-queue.component';

describe('EmailSmipQueueComponent', () => {
  let component: EmailSmipQueueComponent;
  let fixture: ComponentFixture<EmailSmipQueueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailSmipQueueComponent]
    });
    fixture = TestBed.createComponent(EmailSmipQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
