import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTabComponent } from './inventory-tab.component';

describe('InventoryTabComponent', () => {
  let component: InventoryTabComponent;
  let fixture: ComponentFixture<InventoryTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryTabComponent]
    });
    fixture = TestBed.createComponent(InventoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
