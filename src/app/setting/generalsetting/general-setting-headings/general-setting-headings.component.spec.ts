import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingHeadingsComponent } from './general-setting-headings.component';

describe('GeneralSettingHeadingsComponent', () => {
  let component: GeneralSettingHeadingsComponent;
  let fixture: ComponentFixture<GeneralSettingHeadingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralSettingHeadingsComponent]
    });
    fixture = TestBed.createComponent(GeneralSettingHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
