import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomFieldComponent } from './add-custom-field.component';

describe('AddCustomFieldComponent', () => {
  let component: AddCustomFieldComponent;
  let fixture: ComponentFixture<AddCustomFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCustomFieldComponent]
    });
    fixture = TestBed.createComponent(AddCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
