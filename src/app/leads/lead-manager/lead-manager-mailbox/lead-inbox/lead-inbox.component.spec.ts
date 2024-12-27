import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadInboxComponent } from './lead-inbox.component';

describe('LeadInboxComponent', () => {
  let component: LeadInboxComponent;
  let fixture: ComponentFixture<LeadInboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadInboxComponent]
    });
    fixture = TestBed.createComponent(LeadInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
