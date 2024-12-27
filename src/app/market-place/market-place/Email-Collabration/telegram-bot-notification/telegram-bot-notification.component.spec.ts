import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramBotNotificationComponent } from './telegram-bot-notification.component';

describe('TelegramBotNotificationComponent', () => {
  let component: TelegramBotNotificationComponent;
  let fixture: ComponentFixture<TelegramBotNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelegramBotNotificationComponent]
    });
    fixture = TestBed.createComponent(TelegramBotNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
