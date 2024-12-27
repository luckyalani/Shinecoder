import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepperFileuploadComponent } from './second-stepper-fileupload.component';

describe('SecondStepperFileuploadComponent', () => {
  let component: SecondStepperFileuploadComponent;
  let fixture: ComponentFixture<SecondStepperFileuploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondStepperFileuploadComponent]
    });
    fixture = TestBed.createComponent(SecondStepperFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
