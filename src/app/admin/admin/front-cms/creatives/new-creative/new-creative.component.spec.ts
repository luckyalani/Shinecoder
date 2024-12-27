import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreativeComponent } from './new-creative.component';

describe('NewCreativeComponent', () => {
  let component: NewCreativeComponent;
  let fixture: ComponentFixture<NewCreativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCreativeComponent]
    });
    fixture = TestBed.createComponent(NewCreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
