import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorConticonEditComponent } from './vendor-conticon-edit.component';

describe('VendorConticonEditComponent', () => {
  let component: VendorConticonEditComponent;
  let fixture: ComponentFixture<VendorConticonEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorConticonEditComponent]
    });
    fixture = TestBed.createComponent(VendorConticonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
