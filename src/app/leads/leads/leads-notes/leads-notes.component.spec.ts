import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsNotesComponent } from './leads-notes.component';

describe('LeadsNotesComponent', () => {
  let component: LeadsNotesComponent;
  let fixture: ComponentFixture<LeadsNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsNotesComponent]
    });
    fixture = TestBed.createComponent(LeadsNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
