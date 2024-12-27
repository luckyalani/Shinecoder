import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsNewComponent } from './announcements-new.component';

describe('AnnouncementsNewComponent', () => {
  let component: AnnouncementsNewComponent;
  let fixture: ComponentFixture<AnnouncementsNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsNewComponent]
    });
    fixture = TestBed.createComponent(AnnouncementsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
