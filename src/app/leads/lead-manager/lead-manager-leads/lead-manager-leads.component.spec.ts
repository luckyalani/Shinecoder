import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadManagerLeadsComponent } from './lead-manager-leads.component';

describe('LeadManagerLeadsComponent', () => {
  let component: LeadManagerLeadsComponent;
  let fixture: ComponentFixture<LeadManagerLeadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadManagerLeadsComponent]
    });
    fixture = TestBed.createComponent(LeadManagerLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
