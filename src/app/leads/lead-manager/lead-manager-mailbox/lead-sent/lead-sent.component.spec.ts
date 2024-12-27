import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSentComponent } from './lead-sent.component';

describe('LeadSentComponent', () => {
  let component: LeadSentComponent;
  let fixture: ComponentFixture<LeadSentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadSentComponent]
    });
    fixture = TestBed.createComponent(LeadSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
