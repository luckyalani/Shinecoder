import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormsComponent } from './add-forms.component';

describe('AddFormsComponent', () => {
  let component: AddFormsComponent;
  let fixture: ComponentFixture<AddFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFormsComponent]
    });
    fixture = TestBed.createComponent(AddFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
