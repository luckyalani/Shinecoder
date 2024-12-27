import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEditButtonComponent } from './click-edit-button.component';

describe('ClickEditButtonComponent', () => {
  let component: ClickEditButtonComponent;
  let fixture: ComponentFixture<ClickEditButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickEditButtonComponent]
    });
    fixture = TestBed.createComponent(ClickEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
