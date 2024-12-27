import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadComposeEmailComponent } from './lead-compose-email.component';

describe('LeadComposeEmailComponent', () => {
  let component: LeadComposeEmailComponent;
  let fixture: ComponentFixture<LeadComposeEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadComposeEmailComponent]
    });
    fixture = TestBed.createComponent(LeadComposeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
