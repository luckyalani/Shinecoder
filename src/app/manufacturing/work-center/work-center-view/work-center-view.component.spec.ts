import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCenterViewComponent } from './work-center-view.component';

describe('WorkCenterViewComponent', () => {
  let component: WorkCenterViewComponent;
  let fixture: ComponentFixture<WorkCenterViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkCenterViewComponent]
    });
    fixture = TestBed.createComponent(WorkCenterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
