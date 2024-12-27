import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepperIntegrationCodeComponent } from './second-stepper-integration-code.component';

describe('SecondStepperIntegrationCodeComponent', () => {
  let component: SecondStepperIntegrationCodeComponent;
  let fixture: ComponentFixture<SecondStepperIntegrationCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondStepperIntegrationCodeComponent]
    });
    fixture = TestBed.createComponent(SecondStepperIntegrationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
