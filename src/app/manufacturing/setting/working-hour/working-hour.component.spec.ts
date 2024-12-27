import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingHourComponent } from './working-hour.component';

describe('WorkingHourComponent', () => {
  let component: WorkingHourComponent;
  let fixture: ComponentFixture<WorkingHourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingHourComponent]
    });
    fixture = TestBed.createComponent(WorkingHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
