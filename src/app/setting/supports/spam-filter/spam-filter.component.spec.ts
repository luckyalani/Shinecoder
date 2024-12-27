import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamFilterComponent } from './spam-filter.component';

describe('SpamFilterComponent', () => {
  let component: SpamFilterComponent;
  let fixture: ComponentFixture<SpamFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpamFilterComponent]
    });
    fixture = TestBed.createComponent(SpamFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
