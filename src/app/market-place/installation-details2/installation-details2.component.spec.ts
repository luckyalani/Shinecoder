import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationDetails2Component } from './installation-details2.component';

describe('InstallationDetails2Component', () => {
  let component: InstallationDetails2Component;
  let fixture: ComponentFixture<InstallationDetails2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallationDetails2Component]
    });
    fixture = TestBed.createComponent(InstallationDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
