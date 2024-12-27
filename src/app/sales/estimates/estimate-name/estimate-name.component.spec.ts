import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateNameComponent } from './estimate-name.component';

describe('EstimateNameComponent', () => {
  let component: EstimateNameComponent;
  let fixture: ComponentFixture<EstimateNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimateNameComponent]
    });
    fixture = TestBed.createComponent(EstimateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
