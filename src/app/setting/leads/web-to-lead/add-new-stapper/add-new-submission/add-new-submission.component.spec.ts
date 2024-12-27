import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSubmissionComponent } from './add-new-submission.component';

describe('AddNewSubmissionComponent', () => {
  let component: AddNewSubmissionComponent;
  let fixture: ComponentFixture<AddNewSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewSubmissionComponent]
    });
    fixture = TestBed.createComponent(AddNewSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
