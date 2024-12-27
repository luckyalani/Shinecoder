import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorContractsNewcontractsComponent } from './vendor-contracts-newcontracts.component';

describe('VendorContractsNewcontractsComponent', () => {
  let component: VendorContractsNewcontractsComponent;
  let fixture: ComponentFixture<VendorContractsNewcontractsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorContractsNewcontractsComponent]
    });
    fixture = TestBed.createComponent(VendorContractsNewcontractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
