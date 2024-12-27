import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishNowReconsileComponent } from './finish-now-reconsile.component';

describe('FinishNowReconsileComponent', () => {
  let component: FinishNowReconsileComponent;
  let fixture: ComponentFixture<FinishNowReconsileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishNowReconsileComponent]
    });
    fixture = TestBed.createComponent(FinishNowReconsileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
