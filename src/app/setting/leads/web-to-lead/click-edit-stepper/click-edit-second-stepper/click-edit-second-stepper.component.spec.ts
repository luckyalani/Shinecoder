import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEditSecondStepperComponent } from './click-edit-second-stepper.component';

describe('ClickEditSecondStepperComponent', () => {
  let component: ClickEditSecondStepperComponent;
  let fixture: ComponentFixture<ClickEditSecondStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickEditSecondStepperComponent]
    });
    fixture = TestBed.createComponent(ClickEditSecondStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
