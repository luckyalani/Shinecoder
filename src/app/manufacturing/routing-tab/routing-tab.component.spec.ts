import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTabComponent } from './routing-tab.component';

describe('RoutingTabComponent', () => {
  let component: RoutingTabComponent;
  let fixture: ComponentFixture<RoutingTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingTabComponent]
    });
    fixture = TestBed.createComponent(RoutingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
