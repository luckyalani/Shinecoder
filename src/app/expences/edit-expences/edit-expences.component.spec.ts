import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpencesComponent } from './edit-expences.component';

describe('EditExpencesComponent', () => {
  let component: EditExpencesComponent;
  let fixture: ComponentFixture<EditExpencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditExpencesComponent]
    });
    fixture = TestBed.createComponent(EditExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
