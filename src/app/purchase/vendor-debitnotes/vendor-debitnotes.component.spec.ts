import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDebitnotesComponent } from './vendor-debitnotes.component';

describe('VendorDebitnotesComponent', () => {
  let component: VendorDebitnotesComponent;
  let fixture: ComponentFixture<VendorDebitnotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorDebitnotesComponent]
    });
    fixture = TestBed.createComponent(VendorDebitnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
