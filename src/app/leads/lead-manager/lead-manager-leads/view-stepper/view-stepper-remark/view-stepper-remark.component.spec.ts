import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStepperRemarkComponent } from './view-stepper-remark.component';

describe('ViewStepperRemarkComponent', () => {
  let component: ViewStepperRemarkComponent;
  let fixture: ComponentFixture<ViewStepperRemarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStepperRemarkComponent]
    });
    fixture = TestBed.createComponent(ViewStepperRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
