import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeriesComponent } from './new-series.component';

describe('NewSeriesComponent', () => {
  let component: NewSeriesComponent;
  let fixture: ComponentFixture<NewSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSeriesComponent]
    });
    fixture = TestBed.createComponent(NewSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
