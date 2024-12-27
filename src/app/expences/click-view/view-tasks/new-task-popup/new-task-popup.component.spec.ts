import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskPopupComponent } from './new-task-popup.component';

describe('NewTaskPopupComponent', () => {
  let component: NewTaskPopupComponent;
  let fixture: ComponentFixture<NewTaskPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTaskPopupComponent]
    });
    fixture = TestBed.createComponent(NewTaskPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
