import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorNewdebitnoteComponent } from './vendor-newdebitnote.component';

describe('VendorNewdebitnoteComponent', () => {
  let component: VendorNewdebitnoteComponent;
  let fixture: ComponentFixture<VendorNewdebitnoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorNewdebitnoteComponent]
    });
    fixture = TestBed.createComponent(VendorNewdebitnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
