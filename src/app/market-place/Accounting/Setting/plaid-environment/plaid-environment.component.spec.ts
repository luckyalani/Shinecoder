import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaidEnvironmentComponent } from './plaid-environment.component';

describe('PlaidEnvironmentComponent', () => {
  let component: PlaidEnvironmentComponent;
  let fixture: ComponentFixture<PlaidEnvironmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaidEnvironmentComponent]
    });
    fixture = TestBed.createComponent(PlaidEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
