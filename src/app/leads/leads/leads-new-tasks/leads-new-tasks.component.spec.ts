import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsNewTasksComponent } from './leads-new-tasks.component';

describe('LeadsNewTasksComponent', () => {
  let component: LeadsNewTasksComponent;
  let fixture: ComponentFixture<LeadsNewTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsNewTasksComponent]
    });
    fixture = TestBed.createComponent(LeadsNewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
