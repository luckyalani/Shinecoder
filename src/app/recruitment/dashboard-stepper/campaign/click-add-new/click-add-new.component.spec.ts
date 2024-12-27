import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickAddNewComponent } from './click-add-new.component';

describe('ClickAddNewComponent', () => {
  let component: ClickAddNewComponent;
  let fixture: ComponentFixture<ClickAddNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickAddNewComponent]
    });
    fixture = TestBed.createComponent(ClickAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
