import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickViewComponent } from './click-view.component';

describe('ClickViewComponent', () => {
  let component: ClickViewComponent;
  let fixture: ComponentFixture<ClickViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickViewComponent]
    });
    fixture = TestBed.createComponent(ClickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
