import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickAddNewConfigurationComponent } from './click-add-new-configuration.component';

describe('ClickAddNewConfigurationComponent', () => {
  let component: ClickAddNewConfigurationComponent;
  let fixture: ComponentFixture<ClickAddNewConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickAddNewConfigurationComponent]
    });
    fixture = TestBed.createComponent(ClickAddNewConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
