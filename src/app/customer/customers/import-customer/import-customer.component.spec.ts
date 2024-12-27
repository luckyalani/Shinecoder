import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCustomerComponent } from './import-customer.component';

describe('ImportCustomerComponent', () => {
  let component: ImportCustomerComponent;
  let fixture: ComponentFixture<ImportCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportCustomerComponent]
    });
    fixture = TestBed.createComponent(ImportCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
