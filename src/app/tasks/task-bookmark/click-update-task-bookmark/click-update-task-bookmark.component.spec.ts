import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickUpdateTaskBookmarkComponent } from './click-update-task-bookmark.component';

describe('ClickUpdateTaskBookmarkComponent', () => {
  let component: ClickUpdateTaskBookmarkComponent;
  let fixture: ComponentFixture<ClickUpdateTaskBookmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickUpdateTaskBookmarkComponent]
    });
    fixture = TestBed.createComponent(ClickUpdateTaskBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
