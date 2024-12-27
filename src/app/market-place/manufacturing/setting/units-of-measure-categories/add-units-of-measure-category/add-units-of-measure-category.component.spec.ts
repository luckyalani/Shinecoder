import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitsOfMeasureCategoryComponent } from './add-units-of-measure-category.component';

describe('AddUnitsOfMeasureCategoryComponent', () => {
  let component: AddUnitsOfMeasureCategoryComponent;
  let fixture: ComponentFixture<AddUnitsOfMeasureCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUnitsOfMeasureCategoryComponent]
    });
    fixture = TestBed.createComponent(AddUnitsOfMeasureCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
