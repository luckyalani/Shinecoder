import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDetailsPopupComponent } from './general-details-popup.component';

describe('GeneralDetailsPopupComponent', () => {
  let component: GeneralDetailsPopupComponent;
  let fixture: ComponentFixture<GeneralDetailsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralDetailsPopupComponent]
    });
    fixture = TestBed.createComponent(GeneralDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
