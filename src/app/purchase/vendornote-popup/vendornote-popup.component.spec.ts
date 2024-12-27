import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendornotePopupComponent } from './vendornote-popup.component';

describe('VendornotePopupComponent', () => {
  let component: VendornotePopupComponent;
  let fixture: ComponentFixture<VendornotePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendornotePopupComponent]
    });
    fixture = TestBed.createComponent(VendornotePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
