import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSComponent } from './sms.component';

describe('SMSComponent', () => {
  let component: SMSComponent;
  let fixture: ComponentFixture<SMSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SMSComponent]
    });
    fixture = TestBed.createComponent(SMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
