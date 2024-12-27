import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsViewEditProfileComponent } from './leads-view-edit-profile.component';

describe('LeadsViewEditProfileComponent', () => {
  let component: LeadsViewEditProfileComponent;
  let fixture: ComponentFixture<LeadsViewEditProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsViewEditProfileComponent]
    });
    fixture = TestBed.createComponent(LeadsViewEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
