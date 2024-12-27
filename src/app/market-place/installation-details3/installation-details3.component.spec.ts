import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationDetails3Component } from './installation-details3.component';

describe('InstallationDetails3Component', () => {
  let component: InstallationDetails3Component;
  let fixture: ComponentFixture<InstallationDetails3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallationDetails3Component]
    });
    fixture = TestBed.createComponent(InstallationDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
