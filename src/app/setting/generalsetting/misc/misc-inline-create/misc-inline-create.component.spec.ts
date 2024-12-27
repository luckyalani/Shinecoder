import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscInlineCreateComponent } from './misc-inline-create.component';

describe('MiscInlineCreateComponent', () => {
  let component: MiscInlineCreateComponent;
  let fixture: ComponentFixture<MiscInlineCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscInlineCreateComponent]
    });
    fixture = TestBed.createComponent(MiscInlineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
