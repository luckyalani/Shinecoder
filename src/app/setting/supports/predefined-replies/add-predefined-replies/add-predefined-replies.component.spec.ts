import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPredefinedRepliesComponent } from './add-predefined-replies.component';

describe('AddPredefinedRepliesComponent', () => {
  let component: AddPredefinedRepliesComponent;
  let fixture: ComponentFixture<AddPredefinedRepliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPredefinedRepliesComponent]
    });
    fixture = TestBed.createComponent(AddPredefinedRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
