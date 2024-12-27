import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoutingComponent } from './view-routing.component';

describe('ViewRoutingComponent', () => {
  let component: ViewRoutingComponent;
  let fixture: ComponentFixture<ViewRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRoutingComponent]
    });
    fixture = TestBed.createComponent(ViewRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
