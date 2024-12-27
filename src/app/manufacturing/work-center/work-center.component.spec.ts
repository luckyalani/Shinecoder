import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCenterComponent } from './work-center.component';

describe('WorkCenterComponent', () => {
  let component: WorkCenterComponent;
  let fixture: ComponentFixture<WorkCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkCenterComponent]
    });
    fixture = TestBed.createComponent(WorkCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
