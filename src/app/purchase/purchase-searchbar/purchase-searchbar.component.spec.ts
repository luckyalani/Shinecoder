import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSearchbarComponent } from './purchase-searchbar.component';

describe('PurchaseSearchbarComponent', () => {
  let component: PurchaseSearchbarComponent;
  let fixture: ComponentFixture<PurchaseSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseSearchbarComponent]
    });
    fixture = TestBed.createComponent(PurchaseSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
