import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStepperAllComponent } from './view-stepper-all.component';

describe('ViewStepperAllComponent', () => {
  let component: ViewStepperAllComponent;
  let fixture: ComponentFixture<ViewStepperAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStepperAllComponent]
    });
    fixture = TestBed.createComponent(ViewStepperAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
