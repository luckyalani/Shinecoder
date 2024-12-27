import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInstallPageComponent } from './purchase-install-page.component';

describe('PurchaseInstallPageComponent', () => {
  let component: PurchaseInstallPageComponent;
  let fixture: ComponentFixture<PurchaseInstallPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseInstallPageComponent]
    });
    fixture = TestBed.createComponent(PurchaseInstallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
