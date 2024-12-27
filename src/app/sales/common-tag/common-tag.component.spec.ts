import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTagComponent } from './common-tag.component';

describe('CommonTagComponent', () => {
  let component: CommonTagComponent;
  let fixture: ComponentFixture<CommonTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonTagComponent]
    });
    fixture = TestBed.createComponent(CommonTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
