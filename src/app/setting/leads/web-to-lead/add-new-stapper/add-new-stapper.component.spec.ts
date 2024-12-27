import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStapperComponent } from './add-new-stapper.component';

describe('AddNewStapperComponent', () => {
  let component: AddNewStapperComponent;
  let fixture: ComponentFixture<AddNewStapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewStapperComponent]
    });
    fixture = TestBed.createComponent(AddNewStapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
