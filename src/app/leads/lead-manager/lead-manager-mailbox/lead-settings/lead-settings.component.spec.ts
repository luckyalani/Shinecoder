import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSettingsComponent } from './lead-settings.component';

describe('LeadSettingsComponent', () => {
  let component: LeadSettingsComponent;
  let fixture: ComponentFixture<LeadSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadSettingsComponent]
    });
    fixture = TestBed.createComponent(LeadSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
