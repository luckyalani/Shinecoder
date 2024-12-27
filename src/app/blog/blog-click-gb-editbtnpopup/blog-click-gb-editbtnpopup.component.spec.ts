import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogClickGbEditbtnpopupComponent } from './blog-click-gb-editbtnpopup.component';

describe('BlogClickGbEditbtnpopupComponent', () => {
  let component: BlogClickGbEditbtnpopupComponent;
  let fixture: ComponentFixture<BlogClickGbEditbtnpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogClickGbEditbtnpopupComponent]
    });
    fixture = TestBed.createComponent(BlogClickGbEditbtnpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
