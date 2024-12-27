import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsEditPopupComponent } from './items-edit-popup.component';

describe('ItemsEditPopupComponent', () => {
  let component: ItemsEditPopupComponent;
  let fixture: ComponentFixture<ItemsEditPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsEditPopupComponent]
    });
    fixture = TestBed.createComponent(ItemsEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
