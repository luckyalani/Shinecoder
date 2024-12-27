import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedEmailSetupComponent } from './advanced-email-setup.component';

describe('AdvancedEmailSetupComponent', () => {
  let component: AdvancedEmailSetupComponent;
  let fixture: ComponentFixture<AdvancedEmailSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedEmailSetupComponent]
    });
    fixture = TestBed.createComponent(AdvancedEmailSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
