import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStepperComponent } from './dashboard-stepper.component';

describe('DashboardStepperComponent', () => {
  let component: DashboardStepperComponent;
  let fixture: ComponentFixture<DashboardStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStepperComponent]
    });
    fixture = TestBed.createComponent(DashboardStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
