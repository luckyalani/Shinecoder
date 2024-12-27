import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickNewTaskBookmarkComponent } from './click-new-task-bookmark.component';

describe('ClickNewTaskBookmarkComponent', () => {
  let component: ClickNewTaskBookmarkComponent;
  let fixture: ComponentFixture<ClickNewTaskBookmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickNewTaskBookmarkComponent]
    });
    fixture = TestBed.createComponent(ClickNewTaskBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
