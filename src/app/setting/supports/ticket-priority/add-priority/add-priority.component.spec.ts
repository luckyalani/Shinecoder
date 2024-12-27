import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPriorityComponent } from './add-priority.component';

describe('AddPriorityComponent', () => {
  let component: AddPriorityComponent;
  let fixture: ComponentFixture<AddPriorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPriorityComponent]
    });
    fixture = TestBed.createComponent(AddPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
