import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartReconcileComponent } from './start-reconcile.component';

describe('StartReconcileComponent', () => {
  let component: StartReconcileComponent;
  let fixture: ComponentFixture<StartReconcileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartReconcileComponent]
    });
    fixture = TestBed.createComponent(StartReconcileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
