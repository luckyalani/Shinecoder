import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupPopupComponent } from './new-group-popup.component';

describe('NewGroupPopupComponent', () => {
  let component: NewGroupPopupComponent;
  let fixture: ComponentFixture<NewGroupPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewGroupPopupComponent]
    });
    fixture = TestBed.createComponent(NewGroupPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
