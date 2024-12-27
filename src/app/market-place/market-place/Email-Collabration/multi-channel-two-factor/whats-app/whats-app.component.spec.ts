import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppComponent } from './whats-app.component';

describe('WhatsAppComponent', () => {
  let component: WhatsAppComponent;
  let fixture: ComponentFixture<WhatsAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsAppComponent]
    });
    fixture = TestBed.createComponent(WhatsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
