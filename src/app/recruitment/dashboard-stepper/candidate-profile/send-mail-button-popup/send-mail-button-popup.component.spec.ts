import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailButtonPopupComponent } from './send-mail-button-popup.component';

describe('SendMailButtonPopupComponent', () => {
  let component: SendMailButtonPopupComponent;
  let fixture: ComponentFixture<SendMailButtonPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendMailButtonPopupComponent]
    });
    fixture = TestBed.createComponent(SendMailButtonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
