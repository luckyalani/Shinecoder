import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSeriesPreferenceComponent } from './popup-series-preference.component';

describe('PopupSeriesPreferenceComponent', () => {
  let component: PopupSeriesPreferenceComponent;
  let fixture: ComponentFixture<PopupSeriesPreferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupSeriesPreferenceComponent]
    });
    fixture = TestBed.createComponent(PopupSeriesPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
