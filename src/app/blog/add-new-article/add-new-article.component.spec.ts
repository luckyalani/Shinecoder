import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewArticleComponent } from './add-new-article.component';

describe('AddNewArticleComponent', () => {
  let component: AddNewArticleComponent;
  let fixture: ComponentFixture<AddNewArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewArticleComponent]
    });
    fixture = TestBed.createComponent(AddNewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
