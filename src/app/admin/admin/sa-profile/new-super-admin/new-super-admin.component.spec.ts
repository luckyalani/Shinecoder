import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSuperAdminComponent } from './new-super-admin.component';

describe('NewSuperAdminComponent', () => {
  let component: NewSuperAdminComponent;
  let fixture: ComponentFixture<NewSuperAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSuperAdminComponent]
    });
    fixture = TestBed.createComponent(NewSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
