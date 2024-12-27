import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsViewConvertToCustomerComponent } from './leads-view-convert-to-customer.component';

describe('LeadsViewConvertToCustomerComponent', () => {
  let component: LeadsViewConvertToCustomerComponent;
  let fixture: ComponentFixture<LeadsViewConvertToCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsViewConvertToCustomerComponent]
    });
    fixture = TestBed.createComponent(LeadsViewConvertToCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
