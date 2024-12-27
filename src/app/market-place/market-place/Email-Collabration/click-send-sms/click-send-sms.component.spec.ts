import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickSendSmsComponent } from './click-send-sms.component';

describe('ClickSendSmsComponent', () => {
  let component: ClickSendSmsComponent;
  let fixture: ComponentFixture<ClickSendSmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickSendSmsComponent]
    });
    fixture = TestBed.createComponent(ClickSendSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
