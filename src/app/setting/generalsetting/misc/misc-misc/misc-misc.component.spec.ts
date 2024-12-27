import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscMiscComponent } from './misc-misc.component';

describe('MiscMiscComponent', () => {
  let component: MiscMiscComponent;
  let fixture: ComponentFixture<MiscMiscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscMiscComponent]
    });
    fixture = TestBed.createComponent(MiscMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
