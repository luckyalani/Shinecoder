import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramNotificationComponent } from './telegram-notification.component';

describe('TelegramNotificationComponent', () => {
  let component: TelegramNotificationComponent;
  let fixture: ComponentFixture<TelegramNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelegramNotificationComponent]
    });
    fixture = TestBed.createComponent(TelegramNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
