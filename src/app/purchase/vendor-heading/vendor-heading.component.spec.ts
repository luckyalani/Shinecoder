import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorHeadingComponent } from './vendor-heading.component';

describe('VendorHeadingComponent', () => {
  let component: VendorHeadingComponent;
  let fixture: ComponentFixture<VendorHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorHeadingComponent]
    });
    fixture = TestBed.createComponent(VendorHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
