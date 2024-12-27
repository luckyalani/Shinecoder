import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipInvoicesComponent } from './zip-invoices.component';

describe('ZipInvoicesComponent', () => {
  let component: ZipInvoicesComponent;
  let fixture: ComponentFixture<ZipInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZipInvoicesComponent]
    });
    fixture = TestBed.createComponent(ZipInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
