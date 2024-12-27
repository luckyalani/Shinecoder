import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEditComponent } from './click-edit.component';

describe('ClickEditComponent', () => {
  let component: ClickEditComponent;
  let fixture: ComponentFixture<ClickEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickEditComponent]
    });
    fixture = TestBed.createComponent(ClickEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
