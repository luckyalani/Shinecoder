import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManufuctringOrderComponent } from './view-manufuctring-order.component';

describe('ViewManufuctringOrderComponent', () => {
  let component: ViewManufuctringOrderComponent;
  let fixture: ComponentFixture<ViewManufuctringOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewManufuctringOrderComponent]
    });
    fixture = TestBed.createComponent(ViewManufuctringOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
