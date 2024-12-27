import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedia2Component } from './add-media2.component';

describe('AddMedia2Component', () => {
  let component: AddMedia2Component;
  let fixture: ComponentFixture<AddMedia2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMedia2Component]
    });
    fixture = TestBed.createComponent(AddMedia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
