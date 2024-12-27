import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEditProfileComponent } from './staff-edit-profile.component';

describe('StaffEditProfileComponent', () => {
  let component: StaffEditProfileComponent;
  let fixture: ComponentFixture<StaffEditProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffEditProfileComponent]
    });
    fixture = TestBed.createComponent(StaffEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
