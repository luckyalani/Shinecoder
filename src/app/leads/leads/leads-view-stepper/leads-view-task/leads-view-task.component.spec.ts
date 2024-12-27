import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsViewTaskComponent } from './leads-view-task.component';

describe('LeadsViewTaskComponent', () => {
  let component: LeadsViewTaskComponent;
  let fixture: ComponentFixture<LeadsViewTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsViewTaskComponent]
    });
    fixture = TestBed.createComponent(LeadsViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
