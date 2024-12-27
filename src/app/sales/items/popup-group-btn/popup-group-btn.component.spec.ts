import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGroupBtnComponent } from './popup-group-btn.component';

describe('PopupGroupBtnComponent', () => {
  let component: PopupGroupBtnComponent;
  let fixture: ComponentFixture<PopupGroupBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupGroupBtnComponent]
    });
    fixture = TestBed.createComponent(PopupGroupBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
