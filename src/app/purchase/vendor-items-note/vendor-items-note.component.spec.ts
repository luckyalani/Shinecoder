import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsNoteComponent } from './vendor-items-note.component';

describe('VendorItemsNoteComponent', () => {
  let component: VendorItemsNoteComponent;
  let fixture: ComponentFixture<VendorItemsNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsNoteComponent]
    });
    fixture = TestBed.createComponent(VendorItemsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
