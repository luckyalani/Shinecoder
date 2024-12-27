import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkCenterComponent } from './add-work-center.component';

describe('AddWorkCenterComponent', () => {
  let component: AddWorkCenterComponent;
  let fixture: ComponentFixture<AddWorkCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkCenterComponent]
    });
    fixture = TestBed.createComponent(AddWorkCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
