import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsInstallComponent } from './deals-install.component';

describe('DealsInstallComponent', () => {
  let component: DealsInstallComponent;
  let fixture: ComponentFixture<DealsInstallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealsInstallComponent]
    });
    fixture = TestBed.createComponent(DealsInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
