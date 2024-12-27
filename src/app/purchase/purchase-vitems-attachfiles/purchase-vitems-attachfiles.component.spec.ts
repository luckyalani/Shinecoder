import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseVitemsAttachfilesComponent } from './purchase-vitems-attachfiles.component';

describe('PurchaseVitemsAttachfilesComponent', () => {
  let component: PurchaseVitemsAttachfilesComponent;
  let fixture: ComponentFixture<PurchaseVitemsAttachfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseVitemsAttachfilesComponent]
    });
    fixture = TestBed.createComponent(PurchaseVitemsAttachfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
