import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLeadComponent } from './add-new-lead.component';

describe('AddNewLeadComponent', () => {
  let component: AddNewLeadComponent;
  let fixture: ComponentFixture<AddNewLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewLeadComponent]
    });
    fixture = TestBed.createComponent(AddNewLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
