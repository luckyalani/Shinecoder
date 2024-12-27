import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAdminDialogueComponent } from './assign-admin-dialogue.component';

describe('AssignAdminDialogueComponent', () => {
  let component: AssignAdminDialogueComponent;
  let fixture: ComponentFixture<AssignAdminDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignAdminDialogueComponent]
    });
    fixture = TestBed.createComponent(AssignAdminDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
