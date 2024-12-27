import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewGeneralComponent } from './add-new-general.component';

describe('AddNewGeneralComponent', () => {
  let component: AddNewGeneralComponent;
  let fixture: ComponentFixture<AddNewGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewGeneralComponent]
    });
    fixture = TestBed.createComponent(AddNewGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
