import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SADashboardComponent } from './sa-dashboard.component';

describe('SADashboardComponent', () => {
  let component: SADashboardComponent;
  let fixture: ComponentFixture<SADashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SADashboardComponent]
    });
    fixture = TestBed.createComponent(SADashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
