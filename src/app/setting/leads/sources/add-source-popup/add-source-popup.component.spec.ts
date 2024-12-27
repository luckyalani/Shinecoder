import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSourcePopupComponent } from './add-source-popup.component';

describe('AddSourcePopupComponent', () => {
  let component: AddSourcePopupComponent;
  let fixture: ComponentFixture<AddSourcePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSourcePopupComponent]
    });
    fixture = TestBed.createComponent(AddSourcePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
