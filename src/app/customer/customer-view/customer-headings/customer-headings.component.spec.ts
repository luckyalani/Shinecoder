import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHeadingsComponent } from './customer-headings.component';

describe('CustomerHeadingsComponent', () => {
  let component: CustomerHeadingsComponent;
  let fixture: ComponentFixture<CustomerHeadingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerHeadingsComponent]
    });
    fixture = TestBed.createComponent(CustomerHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
