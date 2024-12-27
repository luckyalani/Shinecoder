import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBillComponent } from './popup-bill.component';

describe('PopupBillComponent', () => {
  let component: PopupBillComponent;
  let fixture: ComponentFixture<PopupBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupBillComponent]
    });
    fixture = TestBed.createComponent(PopupBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
