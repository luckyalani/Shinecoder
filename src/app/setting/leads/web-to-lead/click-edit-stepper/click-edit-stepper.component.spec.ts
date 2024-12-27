import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEditStepperComponent } from './click-edit-stepper.component';

describe('ClickEditStepperComponent', () => {
  let component: ClickEditStepperComponent;
  let fixture: ComponentFixture<ClickEditStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickEditStepperComponent]
    });
    fixture = TestBed.createComponent(ClickEditStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
