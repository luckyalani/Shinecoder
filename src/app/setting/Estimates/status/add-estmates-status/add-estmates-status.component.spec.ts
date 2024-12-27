import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstmatesStatusComponent } from './add-estmates-status.component';

describe('AddEstmatesStatusComponent', () => {
  let component: AddEstmatesStatusComponent;
  let fixture: ComponentFixture<AddEstmatesStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEstmatesStatusComponent]
    });
    fixture = TestBed.createComponent(AddEstmatesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
