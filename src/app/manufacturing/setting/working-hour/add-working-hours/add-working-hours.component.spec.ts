import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkingHoursComponent } from './add-working-hours.component';

describe('AddWorkingHoursComponent', () => {
  let component: AddWorkingHoursComponent;
  let fixture: ComponentFixture<AddWorkingHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkingHoursComponent]
    });
    fixture = TestBed.createComponent(AddWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
