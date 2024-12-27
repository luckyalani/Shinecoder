import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBookmarkComponent } from './task-bookmark.component';

describe('TaskBookmarkComponent', () => {
  let component: TaskBookmarkComponent;
  let fixture: ComponentFixture<TaskBookmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskBookmarkComponent]
    });
    fixture = TestBed.createComponent(TaskBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
