import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadManagerMailboxComponent } from './lead-manager-mailbox.component';

describe('LeadManagerMailboxComponent', () => {
  let component: LeadManagerMailboxComponent;
  let fixture: ComponentFixture<LeadManagerMailboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadManagerMailboxComponent]
    });
    fixture = TestBed.createComponent(LeadManagerMailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
