import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCreditNotesDialogueComponent } from './zip-credit-notes-dialogue.component';

describe('ZipCreditNotesDialogueComponent', () => {
  let component: ZipCreditNotesDialogueComponent;
  let fixture: ComponentFixture<ZipCreditNotesDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZipCreditNotesDialogueComponent]
    });
    fixture = TestBed.createComponent(ZipCreditNotesDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
