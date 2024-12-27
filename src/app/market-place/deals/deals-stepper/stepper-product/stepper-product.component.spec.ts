import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperProductComponent } from './stepper-product.component';

describe('StepperProductComponent', () => {
  let component: StepperProductComponent;
  let fixture: ComponentFixture<StepperProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperProductComponent]
    });
    fixture = TestBed.createComponent(StepperProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
