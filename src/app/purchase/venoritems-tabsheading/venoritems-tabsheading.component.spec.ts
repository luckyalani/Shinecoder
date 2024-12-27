import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenoritemsTabsheadingComponent } from './venoritems-tabsheading.component';

describe('VenoritemsTabsheadingComponent', () => {
  let component: VenoritemsTabsheadingComponent;
  let fixture: ComponentFixture<VenoritemsTabsheadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenoritemsTabsheadingComponent]
    });
    fixture = TestBed.createComponent(VenoritemsTabsheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
