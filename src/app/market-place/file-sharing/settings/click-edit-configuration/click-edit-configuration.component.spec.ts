import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEditConfigurationComponent } from './click-edit-configuration.component';

describe('ClickEditConfigurationComponent', () => {
  let component: ClickEditConfigurationComponent;
  let fixture: ComponentFixture<ClickEditConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickEditConfigurationComponent]
    });
    fixture = TestBed.createComponent(ClickEditConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
