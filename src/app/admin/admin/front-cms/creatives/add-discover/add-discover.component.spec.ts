import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscoverComponent } from './add-discover.component';

describe('AddDiscoverComponent', () => {
  let component: AddDiscoverComponent;
  let fixture: ComponentFixture<AddDiscoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDiscoverComponent]
    });
    fixture = TestBed.createComponent(AddDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
