import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsViewProfileComponent } from './leads-view-profile.component';

describe('LeadsViewProfileComponent', () => {
  let component: LeadsViewProfileComponent;
  let fixture: ComponentFixture<LeadsViewProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsViewProfileComponent]
    });
    fixture = TestBed.createComponent(LeadsViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
