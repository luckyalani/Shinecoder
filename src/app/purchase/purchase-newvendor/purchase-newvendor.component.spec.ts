import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseNewvendorComponent } from './purchase-newvendor.component';

describe('PurchaseNewvendorComponent', () => {
  let component: PurchaseNewvendorComponent;
  let fixture: ComponentFixture<PurchaseNewvendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseNewvendorComponent]
    });
    fixture = TestBed.createComponent(PurchaseNewvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
