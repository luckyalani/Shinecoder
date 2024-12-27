import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEstimateContentComponent } from './view-estimate-content.component';

describe('ViewEstimateContentComponent', () => {
  let component: ViewEstimateContentComponent;
  let fixture: ComponentFixture<ViewEstimateContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEstimateContentComponent]
    });
    fixture = TestBed.createComponent(ViewEstimateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
