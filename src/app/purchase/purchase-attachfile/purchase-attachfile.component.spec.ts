import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAttachfileComponent } from './purchase-attachfile.component';

describe('PurchaseAttachfileComponent', () => {
  let component: PurchaseAttachfileComponent;
  let fixture: ComponentFixture<PurchaseAttachfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseAttachfileComponent]
    });
    fixture = TestBed.createComponent(PurchaseAttachfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
