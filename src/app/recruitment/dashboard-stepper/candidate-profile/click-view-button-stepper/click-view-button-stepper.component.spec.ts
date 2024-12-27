import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickViewButtonStepperComponent } from './click-view-button-stepper.component';

describe('ClickViewButtonStepperComponent', () => {
  let component: ClickViewButtonStepperComponent;
  let fixture: ComponentFixture<ClickViewButtonStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickViewButtonStepperComponent]
    });
    fixture = TestBed.createComponent(ClickViewButtonStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
