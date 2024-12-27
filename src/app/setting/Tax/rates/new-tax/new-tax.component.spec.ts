import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaxComponent } from './new-tax.component';

describe('NewTaxComponent', () => {
  let component: NewTaxComponent;
  let fixture: ComponentFixture<NewTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTaxComponent]
    });
    fixture = TestBed.createComponent(NewTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
