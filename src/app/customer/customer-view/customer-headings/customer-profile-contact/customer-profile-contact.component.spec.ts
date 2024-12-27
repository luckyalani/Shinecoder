import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileContactComponent } from './customer-profile-contact.component';

describe('CustomerProfileContactComponent', () => {
  let component: CustomerProfileContactComponent;
  let fixture: ComponentFixture<CustomerProfileContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerProfileContactComponent]
    });
    fixture = TestBed.createComponent(CustomerProfileContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
