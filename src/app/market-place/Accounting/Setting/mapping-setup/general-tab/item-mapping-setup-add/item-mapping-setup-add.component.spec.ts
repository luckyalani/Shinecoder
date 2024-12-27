import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMappingSetupAddComponent } from './item-mapping-setup-add.component';

describe('ItemMappingSetupAddComponent', () => {
  let component: ItemMappingSetupAddComponent;
  let fixture: ComponentFixture<ItemMappingSetupAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemMappingSetupAddComponent]
    });
    fixture = TestBed.createComponent(ItemMappingSetupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
