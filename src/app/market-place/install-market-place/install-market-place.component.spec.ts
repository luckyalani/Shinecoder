import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallMarketPlaceComponent } from './install-market-place.component';

describe('InstallMarketPlaceComponent', () => {
  let component: InstallMarketPlaceComponent;
  let fixture: ComponentFixture<InstallMarketPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallMarketPlaceComponent]
    });
    fixture = TestBed.createComponent(InstallMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
