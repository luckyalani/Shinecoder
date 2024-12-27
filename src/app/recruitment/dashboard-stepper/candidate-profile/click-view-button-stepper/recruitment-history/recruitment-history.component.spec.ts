import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentHistoryComponent } from './recruitment-history.component';

describe('RecruitmentHistoryComponent', () => {
  let component: RecruitmentHistoryComponent;
  let fixture: ComponentFixture<RecruitmentHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitmentHistoryComponent]
    });
    fixture = TestBed.createComponent(RecruitmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
