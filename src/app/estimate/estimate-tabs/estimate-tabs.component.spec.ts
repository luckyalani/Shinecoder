import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateTabsComponent } from './estimate-tabs.component';

describe('EstimateTabsComponent', () => {
  let component: EstimateTabsComponent;
  let fixture: ComponentFixture<EstimateTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimateTabsComponent]
    });
    fixture = TestBed.createComponent(EstimateTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
