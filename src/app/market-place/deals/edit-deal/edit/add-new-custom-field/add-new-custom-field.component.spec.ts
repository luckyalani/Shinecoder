import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCustomFieldComponent } from './add-new-custom-field.component';

describe('AddNewCustomFieldComponent', () => {
  let component: AddNewCustomFieldComponent;
  let fixture: ComponentFixture<AddNewCustomFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCustomFieldComponent]
    });
    fixture = TestBed.createComponent(AddNewCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
