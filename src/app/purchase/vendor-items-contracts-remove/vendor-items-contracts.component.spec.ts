import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsContractsComponent } from './vendor-items-contracts.component';

describe('VendorItemsContractsComponent', () => {
  let component: VendorItemsContractsComponent;
  let fixture: ComponentFixture<VendorItemsContractsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsContractsComponent]
    });
    fixture = TestBed.createComponent(VendorItemsContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
