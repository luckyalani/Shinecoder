import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpulationPopupComponent } from './mainpulation-popup.component';

describe('MainpulationPopupComponent', () => {
  let component: MainpulationPopupComponent;
  let fixture: ComponentFixture<MainpulationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainpulationPopupComponent]
    });
    fixture = TestBed.createComponent(MainpulationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
