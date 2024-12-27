import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadTrashComponent } from './lead-trash.component';

describe('LeadTrashComponent', () => {
  let component: LeadTrashComponent;
  let fixture: ComponentFixture<LeadTrashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadTrashComponent]
    });
    fixture = TestBed.createComponent(LeadTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
