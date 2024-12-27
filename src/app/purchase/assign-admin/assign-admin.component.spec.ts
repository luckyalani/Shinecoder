import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAdminComponent } from './assign-admin.component';

describe('AssignAdminComponent', () => {
  let component: AssignAdminComponent;
  let fixture: ComponentFixture<AssignAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignAdminComponent]
    });
    fixture = TestBed.createComponent(AssignAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
