import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickViewPopupComponent } from './click-view-popup.component';

describe('ClickViewPopupComponent', () => {
  let component: ClickViewPopupComponent;
  let fixture: ComponentFixture<ClickViewPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickViewPopupComponent]
    });
    fixture = TestBed.createComponent(ClickViewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
