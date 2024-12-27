import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsOfMeasureComponent } from './units-of-measure.component';

describe('UnitsOfMeasureComponent', () => {
  let component: UnitsOfMeasureComponent;
  let fixture: ComponentFixture<UnitsOfMeasureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitsOfMeasureComponent]
    });
    fixture = TestBed.createComponent(UnitsOfMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
