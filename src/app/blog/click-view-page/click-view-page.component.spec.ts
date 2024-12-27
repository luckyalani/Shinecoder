import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickViewPageComponent } from './click-view-page.component';

describe('ClickViewPageComponent', () => {
  let component: ClickViewPageComponent;
  let fixture: ComponentFixture<ClickViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickViewPageComponent]
    });
    fixture = TestBed.createComponent(ClickViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
