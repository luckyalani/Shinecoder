import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconcileBackComponent } from './reconcile-back.component';

describe('ReconcileBackComponent', () => {
  let component: ReconcileBackComponent;
  let fixture: ComponentFixture<ReconcileBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReconcileBackComponent]
    });
    fixture = TestBed.createComponent(ReconcileBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
