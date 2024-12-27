import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillMaterialComponent } from './add-bill-material.component';

describe('AddBillMaterialComponent', () => {
  let component: AddBillMaterialComponent;
  let fixture: ComponentFixture<AddBillMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBillMaterialComponent]
    });
    fixture = TestBed.createComponent(AddBillMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
