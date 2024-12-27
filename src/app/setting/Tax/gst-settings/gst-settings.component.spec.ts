import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstSettingsComponent } from './gst-settings.component';

describe('GstSettingsComponent', () => {
  let component: GstSettingsComponent;
  let fixture: ComponentFixture<GstSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GstSettingsComponent]
    });
    fixture = TestBed.createComponent(GstSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
