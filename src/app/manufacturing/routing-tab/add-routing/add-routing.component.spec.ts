import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoutingComponent } from './add-routing.component';

describe('AddRoutingComponent', () => {
  let component: AddRoutingComponent;
  let fixture: ComponentFixture<AddRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRoutingComponent]
    });
    fixture = TestBed.createComponent(AddRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
