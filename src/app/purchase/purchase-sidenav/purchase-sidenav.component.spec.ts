import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSidenavComponent } from './purchase-sidenav.component';

describe('PurchaseSidenavComponent', () => {
  let component: PurchaseSidenavComponent;
  let fixture: ComponentFixture<PurchaseSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseSidenavComponent]
    });
    fixture = TestBed.createComponent(PurchaseSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
