import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemsContractsNewcontractsComponent } from './vendor-items-contracts-newcontracts.component';

describe('VendorItemsContractsNewcontractsComponent', () => {
  let component: VendorItemsContractsNewcontractsComponent;
  let fixture: ComponentFixture<VendorItemsContractsNewcontractsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorItemsContractsNewcontractsComponent]
    });
    fixture = TestBed.createComponent(VendorItemsContractsNewcontractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
