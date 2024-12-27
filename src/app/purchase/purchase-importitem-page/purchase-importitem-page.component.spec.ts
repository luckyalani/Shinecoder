import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseImportitemPageComponent } from './purchase-importitem-page.component';

describe('PurchaseImportitemPageComponent', () => {
  let component: PurchaseImportitemPageComponent;
  let fixture: ComponentFixture<PurchaseImportitemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseImportitemPageComponent]
    });
    fixture = TestBed.createComponent(PurchaseImportitemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
