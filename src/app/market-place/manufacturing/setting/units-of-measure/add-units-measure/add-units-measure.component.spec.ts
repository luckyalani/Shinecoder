import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitsMeasureComponent } from './add-units-measure.component';

describe('AddUnitsMeasureComponent', () => {
  let component: AddUnitsMeasureComponent;
  let fixture: ComponentFixture<AddUnitsMeasureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUnitsMeasureComponent]
    });
    fixture = TestBed.createComponent(AddUnitsMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
