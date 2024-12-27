import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipEstimatesDialogueComponent } from './zip-estimates-dialogue.component';

describe('ZipEstimatesDialogueComponent', () => {
  let component: ZipEstimatesDialogueComponent;
  let fixture: ComponentFixture<ZipEstimatesDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZipEstimatesDialogueComponent]
    });
    fixture = TestBed.createComponent(ZipEstimatesDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
