import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpanFilterPopupComponent } from './add-span-filter-popup.component';

describe('AddSpanFilterPopupComponent', () => {
  let component: AddSpanFilterPopupComponent;
  let fixture: ComponentFixture<AddSpanFilterPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSpanFilterPopupComponent]
    });
    fixture = TestBed.createComponent(AddSpanFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
