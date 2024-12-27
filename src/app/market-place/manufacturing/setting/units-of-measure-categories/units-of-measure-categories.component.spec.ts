import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsOfMeasureCategoriesComponent } from './units-of-measure-categories.component';

describe('UnitsOfMeasureCategoriesComponent', () => {
  let component: UnitsOfMeasureCategoriesComponent;
  let fixture: ComponentFixture<UnitsOfMeasureCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitsOfMeasureCategoriesComponent]
    });
    fixture = TestBed.createComponent(UnitsOfMeasureCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
