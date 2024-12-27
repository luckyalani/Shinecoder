import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationDetailsComponent } from './installation-details.component';

describe('InstallationDetailsComponent', () => {
  let component: InstallationDetailsComponent;
  let fixture: ComponentFixture<InstallationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallationDetailsComponent]
    });
    fixture = TestBed.createComponent(InstallationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
