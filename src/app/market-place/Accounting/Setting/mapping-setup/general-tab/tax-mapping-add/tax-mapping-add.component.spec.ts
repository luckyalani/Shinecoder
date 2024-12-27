import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxMappingAddComponent } from './tax-mapping-add.component';

describe('TaxMappingAddComponent', () => {
  let component: TaxMappingAddComponent;
  let fixture: ComponentFixture<TaxMappingAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxMappingAddComponent]
    });
    fixture = TestBed.createComponent(TaxMappingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
