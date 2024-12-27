import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillMaterialsComponent } from './bill-materials.component';

describe('BillMaterialsComponent', () => {
  let component: BillMaterialsComponent;
  let fixture: ComponentFixture<BillMaterialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillMaterialsComponent]
    });
    fixture = TestBed.createComponent(BillMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
