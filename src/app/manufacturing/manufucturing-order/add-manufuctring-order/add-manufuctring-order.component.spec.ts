import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManufuctringOrderComponent } from './add-manufuctring-order.component';

describe('AddManufuctringOrderComponent', () => {
  let component: AddManufuctringOrderComponent;
  let fixture: ComponentFixture<AddManufuctringOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddManufuctringOrderComponent]
    });
    fixture = TestBed.createComponent(AddManufuctringOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
