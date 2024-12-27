import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewContractComponent } from './renew-contract.component';

describe('RenewContractComponent', () => {
  let component: RenewContractComponent;
  let fixture: ComponentFixture<RenewContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenewContractComponent]
    });
    fixture = TestBed.createComponent(RenewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
