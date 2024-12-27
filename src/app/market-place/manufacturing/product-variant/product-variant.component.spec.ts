import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariantComponent } from './product-variant.component';

describe('ProductVariantComponent', () => {
  let component: ProductVariantComponent;
  let fixture: ComponentFixture<ProductVariantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductVariantComponent]
    });
    fixture = TestBed.createComponent(ProductVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
