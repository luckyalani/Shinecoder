import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickSpanFilterComponent } from './click-span-filter.component';

describe('ClickSpanFilterComponent', () => {
  let component: ClickSpanFilterComponent;
  let fixture: ComponentFixture<ClickSpanFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickSpanFilterComponent]
    });
    fixture = TestBed.createComponent(ClickSpanFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
