import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoritemsMultipletabsComponent } from './vendoritems-multipletabs.component';

describe('VendoritemsMultipletabsComponent', () => {
  let component: VendoritemsMultipletabsComponent;
  let fixture: ComponentFixture<VendoritemsMultipletabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendoritemsMultipletabsComponent]
    });
    fixture = TestBed.createComponent(VendoritemsMultipletabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
