import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsViewNewTaskComponent } from './leads-view-new-task.component';

describe('LeadsViewNewTaskComponent', () => {
  let component: LeadsViewNewTaskComponent;
  let fixture: ComponentFixture<LeadsViewNewTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsViewNewTaskComponent]
    });
    fixture = TestBed.createComponent(LeadsViewNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
