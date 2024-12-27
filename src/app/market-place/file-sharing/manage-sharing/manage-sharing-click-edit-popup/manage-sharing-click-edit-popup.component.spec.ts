import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSharingClickEditPopupComponent } from './manage-sharing-click-edit-popup.component';

describe('ManageSharingClickEditPopupComponent', () => {
  let component: ManageSharingClickEditPopupComponent;
  let fixture: ComponentFixture<ManageSharingClickEditPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSharingClickEditPopupComponent]
    });
    fixture = TestBed.createComponent(ManageSharingClickEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
