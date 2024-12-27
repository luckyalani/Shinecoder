import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddTemplateTabComponent } from './popup-add-template-tab.component';

describe('PopupAddTemplateTabComponent', () => {
  let component: PopupAddTemplateTabComponent;
  let fixture: ComponentFixture<PopupAddTemplateTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAddTemplateTabComponent]
    });
    fixture = TestBed.createComponent(PopupAddTemplateTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
