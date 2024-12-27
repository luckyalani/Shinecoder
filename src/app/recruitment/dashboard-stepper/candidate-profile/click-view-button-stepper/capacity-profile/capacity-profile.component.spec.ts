import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityProfileComponent } from './capacity-profile.component';

describe('CapacityProfileComponent', () => {
  let component: CapacityProfileComponent;
  let fixture: ComponentFixture<CapacityProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapacityProfileComponent]
    });
    fixture = TestBed.createComponent(CapacityProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
