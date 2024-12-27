import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDuplicateTransactionComponent } from './popup-duplicate-transaction.component';

describe('PopupDuplicateTransactionComponent', () => {
  let component: PopupDuplicateTransactionComponent;
  let fixture: ComponentFixture<PopupDuplicateTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupDuplicateTransactionComponent]
    });
    fixture = TestBed.createComponent(PopupDuplicateTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
