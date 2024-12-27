import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsDebitNotesComponent } from './vendor-items-debit-notes.component';

describe('VendorItemsDebitNotesComponent', () => {
  let component: VendorItemsDebitNotesComponent;
  let fixture: ComponentFixture<VendorItemsDebitNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsDebitNotesComponent]
    });
    fixture = TestBed.createComponent(VendorItemsDebitNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
