import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGroupbtnPageComponent } from './blog-groupbtn-page.component';

describe('BlogGroupbtnPageComponent', () => {
  let component: BlogGroupbtnPageComponent;
  let fixture: ComponentFixture<BlogGroupbtnPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogGroupbtnPageComponent]
    });
    fixture = TestBed.createComponent(BlogGroupbtnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
