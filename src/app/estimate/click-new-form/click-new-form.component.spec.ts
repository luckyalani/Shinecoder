import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickNewFormComponent } from './click-new-form.component';

describe('ClickNewFormComponent', () => {
  let component: ClickNewFormComponent;
  let fixture: ComponentFixture<ClickNewFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickNewFormComponent]
    });
    fixture = TestBed.createComponent(ClickNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
