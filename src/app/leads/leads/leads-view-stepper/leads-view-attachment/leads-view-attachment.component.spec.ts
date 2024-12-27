import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsViewAttachmentComponent } from './leads-view-attachment.component';

describe('LeadsViewAttachmentComponent', () => {
  let component: LeadsViewAttachmentComponent;
  let fixture: ComponentFixture<LeadsViewAttachmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsViewAttachmentComponent]
    });
    fixture = TestBed.createComponent(LeadsViewAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
