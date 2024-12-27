import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyProjectDialogeComponent } from './copy-project-dialoge.component';

describe('CopyProjectDialogeComponent', () => {
  let component: CopyProjectDialogeComponent;
  let fixture: ComponentFixture<CopyProjectDialogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyProjectDialogeComponent]
    });
    fixture = TestBed.createComponent(CopyProjectDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
