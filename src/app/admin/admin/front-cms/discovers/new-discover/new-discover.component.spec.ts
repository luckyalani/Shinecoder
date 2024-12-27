import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscoverComponent } from './new-discover.component';

describe('NewDiscoverComponent', () => {
  let component: NewDiscoverComponent;
  let fixture: ComponentFixture<NewDiscoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDiscoverComponent]
    });
    fixture = TestBed.createComponent(NewDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
