import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorMultipletabContactsComponent } from './vendor-multipletab-contacts.component';

describe('VendorMultipletabContactsComponent', () => {
  let component: VendorMultipletabContactsComponent;
  let fixture: ComponentFixture<VendorMultipletabContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorMultipletabContactsComponent]
    });
    fixture = TestBed.createComponent(VendorMultipletabContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
