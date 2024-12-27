import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCommontagComponent } from './purchase-commontag.component';

describe('PurchaseCommontagComponent', () => {
  let component: PurchaseCommontagComponent;
  let fixture: ComponentFixture<PurchaseCommontagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseCommontagComponent]
    });
    fixture = TestBed.createComponent(PurchaseCommontagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
