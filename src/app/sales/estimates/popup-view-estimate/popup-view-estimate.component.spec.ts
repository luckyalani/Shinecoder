import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupViewEstimateComponent } from './popup-view-estimate.component';

describe('PopupViewEstimateComponent', () => {
  let component: PopupViewEstimateComponent;
  let fixture: ComponentFixture<PopupViewEstimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupViewEstimateComponent]
    });
    fixture = TestBed.createComponent(PopupViewEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
