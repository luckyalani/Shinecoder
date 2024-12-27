import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsEditActivityLogComponent } from './leads-edit-activity-log.component';

describe('LeadsEditActivityLogComponent', () => {
  let component: LeadsEditActivityLogComponent;
  let fixture: ComponentFixture<LeadsEditActivityLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsEditActivityLogComponent]
    });
    fixture = TestBed.createComponent(LeadsEditActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
