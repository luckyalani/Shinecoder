import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconcileComponent } from './reconcile.component';

describe('ReconcileComponent', () => {
  let component: ReconcileComponent;
  let fixture: ComponentFixture<ReconcileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReconcileComponent]
    });
    fixture = TestBed.createComponent(ReconcileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
