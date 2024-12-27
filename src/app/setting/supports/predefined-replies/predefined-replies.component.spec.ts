import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedRepliesComponent } from './predefined-replies.component';

describe('PredefinedRepliesComponent', () => {
  let component: PredefinedRepliesComponent;
  let fixture: ComponentFixture<PredefinedRepliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredefinedRepliesComponent]
    });
    fixture = TestBed.createComponent(PredefinedRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
