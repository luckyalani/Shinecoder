import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaxGroupComponent } from './new-tax-group.component';

describe('NewTaxGroupComponent', () => {
  let component: NewTaxGroupComponent;
  let fixture: ComponentFixture<NewTaxGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTaxGroupComponent]
    });
    fixture = TestBed.createComponent(NewTaxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
