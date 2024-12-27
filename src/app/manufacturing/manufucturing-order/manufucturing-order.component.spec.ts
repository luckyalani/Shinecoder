import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufucturingOrderComponent } from './manufucturing-order.component';

describe('ManufucturingOrderComponent', () => {
  let component: ManufucturingOrderComponent;
  let fixture: ComponentFixture<ManufucturingOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufucturingOrderComponent]
    });
    fixture = TestBed.createComponent(ManufucturingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
