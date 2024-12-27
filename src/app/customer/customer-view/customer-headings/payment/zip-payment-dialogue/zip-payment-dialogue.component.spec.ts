import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipPaymentDialogueComponent } from './zip-payment-dialogue.component';

describe('ZipPaymentDialogueComponent', () => {
  let component: ZipPaymentDialogueComponent;
  let fixture: ComponentFixture<ZipPaymentDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZipPaymentDialogueComponent]
    });
    fixture = TestBed.createComponent(ZipPaymentDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
