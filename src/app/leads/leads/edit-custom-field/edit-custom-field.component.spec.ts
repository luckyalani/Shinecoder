import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomFieldComponent } from './edit-custom-field.component';

describe('EditCustomFieldComponent', () => {
  let component: EditCustomFieldComponent;
  let fixture: ComponentFixture<EditCustomFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCustomFieldComponent]
    });
    fixture = TestBed.createComponent(EditCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
