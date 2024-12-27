import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantViewComponent } from './variant-view.component';

describe('VariantViewComponent', () => {
  let component: VariantViewComponent;
  let fixture: ComponentFixture<VariantViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariantViewComponent]
    });
    fixture = TestBed.createComponent(VariantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
