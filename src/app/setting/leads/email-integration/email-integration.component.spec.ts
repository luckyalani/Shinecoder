import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailIntegrationComponent } from './email-integration.component';

describe('EmailIntegrationComponent', () => {
  let component: EmailIntegrationComponent;
  let fixture: ComponentFixture<EmailIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailIntegrationComponent]
    });
    fixture = TestBed.createComponent(EmailIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
