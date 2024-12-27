import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeedsManagerRemarkComponent } from './leeds-manager-remark.component';

describe('LeedsManagerRemarkComponent', () => {
  let component: LeedsManagerRemarkComponent;
  let fixture: ComponentFixture<LeedsManagerRemarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeedsManagerRemarkComponent]
    });
    fixture = TestBed.createComponent(LeedsManagerRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
