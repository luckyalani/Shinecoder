import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTempleteComponent } from './click-templete.component';

describe('ClickTempleteComponent', () => {
  let component: ClickTempleteComponent;
  let fixture: ComponentFixture<ClickTempleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickTempleteComponent]
    });
    fixture = TestBed.createComponent(ClickTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
