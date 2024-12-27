import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatesSettingsComponent } from './affiliates-settings.component';

describe('AffiliatesSettingsComponent', () => {
  let component: AffiliatesSettingsComponent;
  let fixture: ComponentFixture<AffiliatesSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffiliatesSettingsComponent]
    });
    fixture = TestBed.createComponent(AffiliatesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
