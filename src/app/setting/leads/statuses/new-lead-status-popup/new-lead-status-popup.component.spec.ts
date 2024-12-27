import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeadStatusPopupComponent } from './new-lead-status-popup.component';

describe('NewLeadStatusPopupComponent', () => {
  let component: NewLeadStatusPopupComponent;
  let fixture: ComponentFixture<NewLeadStatusPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLeadStatusPopupComponent]
    });
    fixture = TestBed.createComponent(NewLeadStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
