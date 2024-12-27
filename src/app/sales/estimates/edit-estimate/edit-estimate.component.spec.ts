import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstimateComponent } from './edit-estimate.component';

describe('EditEstimateComponent', () => {
  let component: EditEstimateComponent;
  let fixture: ComponentFixture<EditEstimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEstimateComponent]
    });
    fixture = TestBed.createComponent(EditEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
