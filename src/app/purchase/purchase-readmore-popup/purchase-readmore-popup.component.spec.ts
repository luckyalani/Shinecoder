import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReadmorePopupComponent } from './purchase-readmore-popup.component';

describe('PurchaseReadmorePopupComponent', () => {
  let component: PurchaseReadmorePopupComponent;
  let fixture: ComponentFixture<PurchaseReadmorePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseReadmorePopupComponent]
    });
    fixture = TestBed.createComponent(PurchaseReadmorePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
