import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillMaterialComponent } from './view-bill-material.component';

describe('ViewBillMaterialComponent', () => {
  let component: ViewBillMaterialComponent;
  let fixture: ComponentFixture<ViewBillMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBillMaterialComponent]
    });
    fixture = TestBed.createComponent(ViewBillMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
