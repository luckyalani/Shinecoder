import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTaxPrefernceComponent } from './default-tax-prefernce.component';

describe('DefaultTaxPrefernceComponent', () => {
  let component: DefaultTaxPrefernceComponent;
  let fixture: ComponentFixture<DefaultTaxPrefernceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultTaxPrefernceComponent]
    });
    fixture = TestBed.createComponent(DefaultTaxPrefernceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
