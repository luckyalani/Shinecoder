import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScgeduleComponent } from './add-scgedule.component';

describe('AddScgeduleComponent', () => {
  let component: AddScgeduleComponent;
  let fixture: ComponentFixture<AddScgeduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddScgeduleComponent]
    });
    fixture = TestBed.createComponent(AddScgeduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
