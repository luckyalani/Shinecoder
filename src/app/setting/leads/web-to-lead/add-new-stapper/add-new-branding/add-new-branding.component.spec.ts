import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBrandingComponent } from './add-new-branding.component';

describe('AddNewBrandingComponent', () => {
  let component: AddNewBrandingComponent;
  let fixture: ComponentFixture<AddNewBrandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewBrandingComponent]
    });
    fixture = TestBed.createComponent(AddNewBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
