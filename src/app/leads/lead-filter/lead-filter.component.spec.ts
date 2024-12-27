import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadFilterComponent } from './lead-filter.component';

describe('LeadFilterComponent', () => {
  let component: LeadFilterComponent;
  let fixture: ComponentFixture<LeadFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadFilterComponent]
    });
    fixture = TestBed.createComponent(LeadFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
