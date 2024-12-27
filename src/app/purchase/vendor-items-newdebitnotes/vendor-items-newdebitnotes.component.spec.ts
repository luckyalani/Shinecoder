import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsNewdebitnotesComponent } from './vendor-items-newdebitnotes.component';

describe('VendorItemsNewdebitnotesComponent', () => {
  let component: VendorItemsNewdebitnotesComponent;
  let fixture: ComponentFixture<VendorItemsNewdebitnotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsNewdebitnotesComponent]
    });
    fixture = TestBed.createComponent(VendorItemsNewdebitnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
