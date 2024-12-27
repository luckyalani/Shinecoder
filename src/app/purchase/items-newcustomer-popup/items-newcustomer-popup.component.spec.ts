import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsNewcustomerPopupComponent } from './items-newcustomer-popup.component';

describe('ItemsNewcustomerPopupComponent', () => {
  let component: ItemsNewcustomerPopupComponent;
  let fixture: ComponentFixture<ItemsNewcustomerPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsNewcustomerPopupComponent]
    });
    fixture = TestBed.createComponent(ItemsNewcustomerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
