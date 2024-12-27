import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsEditTasksComponent } from './leads-edit-tasks.component';

describe('LeadsEditTasksComponent', () => {
  let component: LeadsEditTasksComponent;
  let fixture: ComponentFixture<LeadsEditTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsEditTasksComponent]
    });
    fixture = TestBed.createComponent(LeadsEditTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
